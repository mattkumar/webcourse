# this is a simple app that demonstrates:
# loading an external js file (line 11)
# having shiny-created objects integrate with js
# it's all html anyway..right?

library(shiny)

ui <- fluidPage(

    # add in a js call
    tags$head(tags$script(src="basic2.js")),
    
    titlePanel("Raw JS and Shiny!"),

    sidebarLayout(
        sidebarPanel(),

        mainPanel( 
           h2('Ex 1'),
           actionButton(inputId = 'go', label = 'Click me', onclick="change();"),
           p(id = "mytarget", ""),
           hr(),
           h2('Ex 2'),
           numericInput('mynumber', 'Enter a number', 0),
           actionButton(inputId = 'numbutton', label = 'Try me', onclick="num();"),
           br(),
           p(id = "numtarget", ''),
           hr(),
           h3('Ex 3'),
           actionButton(inputId = 'hide', label = 'Hide Image', onclick="hide();"),
           actionButton(inputId = 'show', label = 'Show Image', onclick="show();"),
           actionButton(inputId = 'toggle', label = 'Toggle Image', onclick="toggle();"),
           img(src = "pizza2.png", id = "mypic")
           
           
        )
    )
)

server <- function(input, output) {}

shinyApp(ui = ui, server = server)
