{
    "version"= 2,
    "name"= "m-m",
    "builds"= [
       { "src": "app.js", "use": "@vercel/node" }
    ],
    "routes" = [
       { "src": "/(.*)", "dest": "/app.js" }
    ]
 }