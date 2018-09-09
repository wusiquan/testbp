<!DOCTYPE html>
<html>
  <head>
    <title>Hello</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
  </head>
  <body>
    <div>
      {% with { a: 'love' } %}
      <div>{{a}}</div>
      {% endwith %}
    </div>
  </body>
</html>