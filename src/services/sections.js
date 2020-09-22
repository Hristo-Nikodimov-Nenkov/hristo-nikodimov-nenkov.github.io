const sections = {
    personalInfoSection: {
        imageUrl: "",
        fields: [
            {
                key: "Name: ",
                value: "Hristo Nikodimov Nenkov"
            },
            {
                key: "E-Mail: ",
                value: "hristo.nikodimov.nenkov@gmail.com"
            }
        ]
    },
    namedSections: [
        {
            title: "Education and Experience",
            fields: [
                {
                    key: "SoftUni",
                    value: "2016 - 2020"
                }
            ]
        },
        {
            title: "Languages",
            fields: [
                {
                    key:"Bulgarian",
                    value: "Native language"
                },
                {
                    key:"English",
                    value: "B3"
                }
            ]
        }
    ]
}

export default {
    loadSections: function (context){
        if(context.state.sections.keys.length === 0){
            context.commit("setSections", sections);
        }
    }
}
