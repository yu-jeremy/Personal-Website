# My Personal Website

This is the GitHub repository for my personal website, its creation is in progress. 

### Accessibility

My website can be accessed and viewed live at [jeremyu.me](http://jeremyu.me). 

Note: Although the website is live, it is far from a "finished" website. 

### Design

This website is being built using Bootstrap's HTML/CSS/JS framework. Use of Bootstrap's cards, carousels, and buttons are especially evident. Additionally, Bootstrap's clean and minimalistic aesthetic allows me to tell my story the way I want to. Other important design notes: I make use of GlyphIcons (by manually including the SVG files in my repo after downloading from the original creator's website, which can be found [here](http://glyphicons.com/)). 

My stories and projects pages are designed so that every story/project is contained in a container that is made interactive and dynamic through JS. Each of these containers utilizes the latest versions of components/classes offered by Bootstrap 4 (including scrollabe windows, cards, lists, etc.).

### Version Control - Git

I am currently pushing files to Github through Terminal since I have been able to connect my home directory (containing my files) with this Github repository. More on this in a possible article (additionally, see some online guides - I used them to figure out how to do this).

### Hosting Information

This website is being hosted through Amazon's AWS services, specifically as a static website through Amazon S3. According to the Amazon Simple Storage Service Developer Guide, which can be found [here](https://aws.amazon.com/documentation/s3/)...

> Amazon Simple Storage Service is storage for the Internet. It is designed to make web-scale computing easier for developers.
Amazon S3 has a simple web services interface that you can use to store and retrieve any amount of data, at any time, from  anywhere on the web. It gives any developer access to the same highly scalable, reliable, fast, inexpensive data storage
infrastructure that Amazon uses to run its own global network of web sites. The service aims to maximize benefits of scale and to pass those benefits on to developers.

> This guide explains the core concepts of Amazon S3, such as buckets and objects, and how to work with these resources using  the Amazon S3 application programming interface (API).

My website makes use of two buckets, one public bucket that is connected to the domain name I own through Amazon Route 53 and another that redirects users to that public bucket. 
