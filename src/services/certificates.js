export default {
    loadCertificates: function (context) {
        if (context.state.certificates.length === 0) {
            const certificates = [
                {
                    courseName:"SoftUni - VueJS",
                    certificateThumb:"/images/thumbs/001.png",
                    courseGrade: 5.95,
                    verificationUrl:"https://softuni.bg/certificates/"
                },
                {
                    courseName:"SoftUni - JS Fundamentals",
                    certificateThumb:"/images/thumbs/002.png",
                    courseGrade: 5.85,
                    verificationUrl:"https://softuni.bg/certificates/"
                }
            ]

            context.commit("setCertificates", certificates);
        }
    }
}
