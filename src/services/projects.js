const projects = [
    {
        name:"CV Generator",
        description:"",
        language:"C#",
        techStack:"ASP.NET Core, Blazor"
    }
]

export default {
    loadProjects: function (context){
        if (context.state.projects.length === 0) {

            context.commit("setProjects", projects);
        }
    }
}
