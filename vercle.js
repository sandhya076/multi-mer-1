{
    "version"= 2,
    "name"= "m-m",
    "builds"= [
       { "src": "index.js", "use": "@vercel/node" }
    ],
    "routes" = [
       { "src": "/(.*)", "dest": "/index.js" }
    ]
 }