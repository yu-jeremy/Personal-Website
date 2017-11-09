# A Personal Website

This is the GitHub repository for my personal website, its creation is in progress. 

### Accessibility

My website can be accessed at <jeremyu.me> or at by redirect at http://jeremyu.me. 

### Design

This website is being built using Bootstrap's HTML/CSS/JS framework. Use of Bootstrap's cards, carousels, and buttons are especially evident. Additionally, Bootstrap's clean and minimalistic aesthetic allows me to tell my story the way I want to. Other important design notes: I make use of GlyphIcons (by manually including the SVG files in my repo after downloading from the original creator's website, which can be found [here](http://glyphicons.com/)). 

### Hosting Information

This website is being hosted through Amazon's AWS services, specifically as a static website through Amazon S3. According to the Amazon Simple Storage Service Developer Guide, which can be found [here](https://aws.amazon.com/documentation/s3/)...

> Amazon Simple Storage Service is storage for the Internet. It is designed to make web-scale computing easier for developers.
Amazon S3 has a simple web services interface that you can use to store and retrieve any amount of data, at any time, from  anywhere on the web. It gives any developer access to the same highly scalable, reliable, fast, inexpensive data storage
infrastructure that Amazon uses to run its own global network of web sites. The service aims to maximize benefits of scale and to pass those benefits on to developers.

> This guide explains the core concepts of Amazon S3, such as buckets and objects, and how to work with these resources using  the Amazon S3 application programming interface (API).

My website makes use of two buckets, one public bucket that is connected to the domain name I own through Amazon Route 53 and another that redirects users to the public bucket. 
