## Welcome to my Portfolio

You can see the source code live on my website at [www.amyhua.me](http://www.amyhua.me).

I made heavy use of [Parallax JS](https://github.com/wagerfield/parallax), [jQuery](http://jquery.com) scripts for the animation and scrolling effects, and custom photography. The [Bootstrap](http://getbootstrap.com) grid system was used for responsive layout design. Social icons are courtesy of [Alex Peattie](http://www.alexpeattie.com/projects/justvector_icons/).


## Usage

    bundle install
    rake db:migrate
    rails s

#### Customizations

   * Be sure to set your own environment variables, GMAIL_USERNAME (e.g., 'example@gmail.com') and GMAIL_PASSWORD, to properly configure Gmail for the contact form.

   * Remove or replace the Google Analytics script at the bottom of app/views/application/index.html. This script is meant to track traffic for www.amyhua.me only.

   * The max content width is currently set to 1500px. This can be customized in app/assets/stylesheets/application.css.erb:19.

== Upcoming

I will be adding a blogging component and an admin account for cloud posting soon!

**Did you find a bug?** Please feel free to submit an issue.



