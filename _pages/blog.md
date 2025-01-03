---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 1
pagination:
enabled: true
collection: posts
permalink: /page/:num/
per_page: 5
sort_field: date
sort_reverse: true
trail:
before: 1 # The number of links before the current page
after: 3 # The number of links after the current page
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

<div class="header-bar">
<h1>{{ site.blog_name }}</h1>
<h2>{{ site.blog_description }}</h2>
</div>
{% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>

<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="card-item col">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title text-lowercase">{{ post.title }}</h3>
<p class="card-text">{{ post.description }}</p>
{% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
{% assign year = post.date | date: "%Y" %}
<p class="post-meta">
{{ read_time }} min read &nbsp; &middot; &nbsp;
<a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
<i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
</a>
</p>
</div>
</div>
</div>
</div>
</a>
</div>
{% endfor %}
</div>
</div>
<hr>
{% endif %}

  <ul class="post-list">
    {% assign postlist = page.pagination.enabled ? paginator.posts : site.posts %}
    {% for post in postlist %}
      <li>
        <div class="row">
          {% if post.thumbnail %}
            <div class="col-sm-9">
          {% endif %}
          <h3>
            <a class="post-title" href="{{ post.redirect | relative_url }}">
              {{ post.title }}
            </a>
          </h3>
          <p>{{ post.description }}</p>
          <p class="post-meta">
            {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
            {{ read_time }} min read &nbsp; &middot; &nbsp;
            {{ post.date | date: '%B %d, %Y' }}
          </p>
          <p class="post-tags">
            <a href="{{ post.date | date: '%Y' | prepend: '/blog/' | prepend: site.baseurl }}">
              <i class="fa-solid fa-calendar fa-sm"></i> {{ post.date | date: '%Y' }}
            </a>
          </p>
          {% if post.thumbnail %}
            </div>
            <div class="col-sm-3">
              <img class="card-img" src="{{ post.thumbnail | relative_url }}" alt="image">
            </div>
          {% endif %}
        </div>
      </li>
    {% endfor %}
  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
