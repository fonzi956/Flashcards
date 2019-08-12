module.exports = 
[
    ["What do you understand by Django?",
    "Django is a free and open source web application framework, written in Python. Django is named after Django Reinhardt, Jazz guitarist from the 1930s to early 1950s who is one of the best guitarists of all time. Django was mainly developed to handle the intensive design of the newsroom. You can even build high-quality web applications using this. It adheres to the DRY principle and focuses completely on automating as much as possible.",
    ""],
    
    ["What does Of Django Field Class types do?",
    "It specifies the database column <br> It also specifies the default HTML widget which is availed while render the form field. <br> The requirements of the minimal validation which is used in Django admin is also specified by the field class",
    ""],
    
    ["Does Django Follow Architectural pattern?",
    "Yes, Django follows Model-View-Controller (MVC) architectural pattern.",
    ""],
    
    ["Clarify the architecture of Django?",
    "Django follows MVC -MVT architecture. MVT  stand for Model View Template design Pattern which is little bit different from MVC (Model View Controller ) Pattern.",
    ""],
    
    ["Is Django stable or not?",
    "Of course, Django is stable. Most of the companies are using it.",
    ""],
    
    ["Is Django a high level or low-level framework?",
    "Django is a high-level Python’s web framework which was designed for rapid development and clean realistic design.",
    ""],
    
    ["How does Django work?",
    "Django can be broken into several components:"
    +" <br> Models.py file: This file defines your data model by extending your single code line into full database tables and add a pre-built administration section to manage content."
    +" <br> Urls.py file: It uses a habitual expression to confine URL patterns for processing."
    +" <br> Views.py file: It is the main part of Django. The actual processing happens in view.",
    ""],
    
    ["What is the name of the Foundation which manages Django web framework?",
    "Django web framework is managed and maintained by an independent and non-profit organization named Django Software Foundation (DSF).",
    ""],
    
    ["Name the features available in Django web framework?",
    "Admin Interface (CRUD)"
    +" <br> Templating"
    +" <br> Form handling"
    +" <br> Internationalization"
    +" <br> Session, user management, role-based permissions"
    +" <br> Object-relational mapping (ORM)"
    +" <br> Testing Framework"
    +" <br> Fantastic Documentation",
    ""],
    
    ["What are the advantages of using Django for web development?",
    "Auto-generated web admin is provided by Django to make website administration easy."
    +" <br> Pre-packaged API is also available for common user tasks."
    +" <br> Business logic can be separated from the HTML using this framework."
    +" <br> You can even divide the code modules into logical groups so as to make it flexible for changing."
    +" <br> Template system is being provided so as to define HTML template for your web page to avoid code duplication.",
    ""],
    
    ["What is the process of creating a project in Django?",
    "To start a project in Django, use the command $django-admin.py and then use the following command:Project"
    +" <br> __init__.py, manage.py, settings.py, urls.py",
    ""],
    
    ["Is Django a content management system (CMS)?",
    "No, Django is not a Content Management System (CMS). Instead, it is a Web framework and a programming tool that helps you in building elegant websites.",
    ""],
    
    ["What does the Django templates contain?",
    "A template is a simple text file. It can create any text-based format like XML, CSV, HTML, etc. A template contains variables that get replaced with values when the template is evaluated and tags (%tag%) that control the logic of the template",
    ""],
    
    ["What is the use of session framework in Django?",
    "The session framework helps you in storing and retrieving arbitrary data on a per-site visitor basis. The data is stored on the server side and abstracts the receiving and sending of cookies. We can implement sessions through a piece of middleware.",
    ""],
    
    ["How can you set up static files in Django?",
    "Basically, we require three main things to set up static files in Django:"
    +" <br> 1) Set STATIC_ROOT in settings.py"
    +" <br> 2) Run manage.py collect static"
    +" <br> 3) Set up a Static Files entry on the PythonAnywhere web tab",
    ""],
    
    ["How to use file based sessions?",
    "set the SESSION_ENGINE settings to django.contrib.sessions.backends.file to use file-based session.",
    ""],
    
    ["What django collectstatic command does?*",
    "Collect static will collect all the data inside the static folder in project directory and creates a copy in the STATIC_ROOT",
    ""],
    
    ["What is some typical usage of middlewares in Django?",
    "Middleware is a function that acts on or transforms a request/response before/after it passes through the view layer "
    +" <br> It can be used for Session management,"
    +" <br> User authentication can be done with the help of this."
    +" <br> It helps in Cross-site request forgery protection"
    +" <br> Content Gzipping, etc.",
    ""],
    
    ["What is the usage of Django-admin.py and manage.py?",
    "Django-admin.py: It is a Django’s command line utility for administrative tasks.Manage.py: It is an automatically created file in each Django project. It is a thin wrapper around the Django-admin.py. It has the following usage:"
    +" <br> It puts your project’s package on sys.path."
    +" <br> It sets the DJANGO_SETTING_MODULE environment variable to points to your project’s setting.py file.",
    ""],
    
    ["What are signals in Django?",
    "Signal are inbuilt utility in Django. They allow to execute some piece of code based on some action or event is occurred in framework something like a new user register, on delete of a record."
    +" <br> pre_save and post_save."
    +" <br> pre_delete and post_delete"
    +" <br> pre_request and post_request",
    ""],
    
    ["Django is based on which design pattern.",
    "Django closely follows the MVC (Model View Controller) design pattern, however, it does use its own logic in the implementation. Because the C is handled by the framework itself and most of the excitement in Django happens in models, templates, and views, Django is often referred to as an MTV framework. In the MTV development pattern:"
    +" <br> M stands for Model, the data access layer. This layer contains anything and everything about the data: how to access it, how to validate it, which behaviors it has, and the relationships between the data."
    +" <br> T stands for Template, the presentation layer. This layer contains presentation-related decisions: how something should be displayed on a Web page or other type of document."
    +" <br> V stands for View, the business logic layer. This layer contains the logic that accesses the model and defers to the appropriate template(s). You can think of it as the bridge between models and templates.",
    ""],
    
    ["List server requirement to install Django Framework.",
    "As Django is Python Framework, in order to install Django Python is required.Django comes with an inbuilt lightweight web server that you can use for the testing purpose.If you are using Django on production Apache with mod_wsgi is required.",
    ""],
    
    ["List the database backends supported by Django Framework?",
    "PostgreSQL, MySQL, SQLite, Oracle and 3d parties: SAP SQL Anywhere, IBM DM2, Microsoft SQL Server, Firebird, ODBC",
    ""],
    
    ["What is recommended way to install Django?",
    "Installing using pip is the recommended way to install Django Framework.: <br> Install pip. <br> Configure virtualenv and virtualenvwrapper <br> Once virtual environment is created and activated, enter the command pip install Django to install Django",
    ""],
    
    ["How to install the development version of Django",
    "$ git clone https://github.com/django/django.git <br> Make sure that the Python interpreter can load Django’s code. The most convenient way to do this is to use virtualenv, virtualenvwrapper, and pip. After setting up and activating the virtualenv, run the following command:<br> $ pip install -e django/ ",
    ""],
    
    ["Where are Django migrations stored?",
    "You can think Django Migrations as version control system for your database/Model. It keeps track of changes done in your application Models/Table like adding a field, deleting a model, etc. Migrations in Django are stored as an on-disk format, referred to here as “migration files”. These files are actually just normal Python files with an agreed-upon object layout, written in a declarative style. A basic migration file looks like this",
    ""],
    
    ["How a request is processed in Django?*",
    "Django determines the root URLconf module to use."
    +" <br> Django loads that Python module and looks for the variable urlpatterns."
    +" <br> Django runs through each URL pattern, in order, and stops at the first one that matches the requested URL"
    +" <br> Once one of the URL patterns matches, Django imports and calls the given view, which is a simple Python function (or a class-based view)",
    ""],
    
    ["When to use the iterator in Django ORM?",
    "Iterators are used for traversing an object in Python which implements iterator protocol. It consists of two methods __iter__() and next()."
    +" <br> In Django, a good use of iterator is when you are processing results that take up a large amount of available memory (lots of small objects or fewer large objects).",
    ""],
    
    ["When QuerySets are evaluated in Django?",
    "In Django, a QuerySet can be evaluated in Iteration, Slicing, Pickling/Caching, repr(),len(), list() and bool().",
    ""],
    
    ["How to set/unset session in Django?",
    "Setting Session in Django"
    +" <br> request.session[\'key\'] = \'value\'"
    +" <br> Unset Session in Django"
    +" <br> del request.session[\'key\']",
    ""],
    
    ["What is a context in Django?",
    "is a dictionary with variable names in the form of key and value like {varible1: 101, varible2: 102},when we pass this context to the template render method, {{ varible1 }} would be replaced with 101 and {{ varible2 }} with 102 in your template.",
    ""],
    
    ["Explain mixins in Django.",
    "is a special kind of multiple inheritances in Python. There are two main situations where mixins are used: <br> You want to provide a lot of optional features for a class. <br> You want to use one particular feature in a lot of different classes.",
    ""],
    
    ["How to get current page URI in Django template.",
    "You can use {{ request.path }} and {{ request.get_full_path }} to get current page URI in Django template",
    ""],
    
    ["How to create an Constant in Django.",
    "To create a constant in Django. Open your settings.py file and add a variable like MY_CONST = \“MY_VALUE\”. To use this constant in your views simply import setting like \“Import settings in views.py\” and use it as settings.MY_CONST",
    ""],
    
    ["How to Configure Database in Django.",
    "In Django database can be configured by setting the 'DATABASES' constant in settings.py file.",
    ""],
    
    ["What constitutes Django templates?",
    "Template can create formats like XML,HTML and CSV(which are text-based formats). In general terms template is a simple text file. It is made up of variables that will later be replaced by values after the template is evaluated and has tags which will control template’s logic.",
    ""],
    
    ["List some caching strategies that you know in Django",
    "File system caching, In-memory caching, Using Memcached, Database caching",
    ""],
    
    ["List type of inheritance supported in Django?",
    "Django supports 3 types of inheritance: Abstract base classes, Multi-table Inheritance, Proxy models",
    ""]
]