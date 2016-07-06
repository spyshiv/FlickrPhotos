# FlickrPhotos
An angular app to call Flicker Api to get 2000 photos and filter them by tags

##Features
1. Infinte Scroll
2. Filter images by tags 
Note: When you start filtering images by tags then infinte scroll will not work because filtering option is created for the current visible images. (Flickr Api is disabled in this process)

##Project Is Live
Open [https://flickrtags.herokuapp.com](https://flickrtags.herokuapp.com)

##Run This Project On Local Server

```
git clone https://github.com/spyshiv/FlickrPhotos.git
cd FlickrPhotos/
python server.py
```
Now open in your browser ```127.0.0.0.1:8000```

You can also use python Simple HTTP Server
```
python -m SimpleHTTPServer
```
Enjoy Cheers!!!

Note: Angular Project needs a server to run 