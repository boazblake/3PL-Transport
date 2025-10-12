open Saturn
open Microsoft.AspNetCore.Builder
open Microsoft.Extensions.DependencyInjection

let app = application {
    use_router Router.appRouter
    url "http://0.0.0.0:8080/"
    service_config (fun services ->
        services.AddCors(fun options ->
            options.AddPolicy("CORS", fun builder ->
                builder
                    .WithOrigins("http://localhost:8020")
                    .AllowAnyMethod()
                    .AllowAnyHeader() |> ignore
            )
        )
    )
    app_config (fun app ->
        app.UseCors("CORS")
    )
}

run app
