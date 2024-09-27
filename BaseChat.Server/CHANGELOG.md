This file explains how Visual Studio created the project.

The following tools were used to generate this project:
- Express generator

The following steps were used to generate this project:
- Create express project with express-generator: `npx express-generator --view=pug D:\SourceCodes\dev_node\BaseChat\BaseChat.Server`.
- Create project file (`BaseChat.Server.esproj`).
- Create `launch.json` to enable debugging.
- Create `nuget.config` to specify location of the JavaScript Project System SDK (which is used in the first line in `BaseChat.Server.esproj`).
- Add project to solution.
- Write this file.
