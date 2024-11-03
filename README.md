# forge
tutoriales de forge

## Git commit "UI kit and display conditions"

### a condition added to show issue when type is Error in Hello-World app
jira:issuePanel:
    - key: hello-world-hello-world-issue-panel
      resource: main
      resolver:
        function: resolver
      render: native
      title: Hello World
      icon: https://developer.atlassian.com/platform/forge/images/icons/issue-panel-icon.svg
      displayConditions:
        issueType: Error
### also manifest is changged in Prodcut-Trigger app to exect app when the issue is viewed.
modules:
  trigger:
    - key: product-trigger-hello-world
      function: main
      events:
        - avi:jira:created:issue
        - avi:jira:viewed:issue
  function:
    - key: main
      handler: index.run
app:
  runtime:
    name: nodejs20.x
  id: ari:cloud:ecosystem::app/1968bcb4-a409-4165-bde8-be6be4a1e90f
permissions:
  scopes:
    - read:jira-work
    - write:jira-work