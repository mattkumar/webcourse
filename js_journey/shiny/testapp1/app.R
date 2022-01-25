# this is a simple app that demonstrates:
# loading an external js file (line 11)
# assigning the actionButton() an on click behavior to execute change(); (line 18)
# having the content appear in the target (line 22)

library(shiny)

ui <- fluidPage(

    # add in a js call
    tags$head(tags$script(src="basic2.js")),
    
    titlePanel("trying shiny with js"),

    sidebarLayout(
        sidebarPanel(
            # action button written in shiny
            actionButton(inputId = 'go', label = 'Click me', onclick="change();")
        ),

        mainPanel( 
           p(id = "mytarget", "hello, click to change")
        )
    )
)

server <- function(input, output) {}

shinyApp(ui = ui, server = server)
