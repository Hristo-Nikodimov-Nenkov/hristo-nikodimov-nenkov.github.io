const certificates = [
    {
        id:"17645",
        code:"ccef3c72"
    },
    {
        id:"22347",
        code:"3b5343a7"
    },
    {
        id:"50705",
        code:"9f4afe9b"
    },
    {
        id:"61486",
        code:"e1e3b049"
    },
    {
        id:"61777",
        code:"8ca7e30a"
    },
    {
        id:"65079",
        code:"93f4a90f"
    },
    {
        id:"65990",
        code:"26b70b74"
    },
    {
        id:"66037",
        code:"92513f98"
    },
    {
        id:"70574",
        code:"6e7b4d97"
    },
    {
        id:"75936",
        code:"13ed4146"
    },
    {
        id:"76180",
        code:"6ed93fe2"
    },
    {
        id:"82168",
        code:"4493403c"
    },
    {
        id:"80664",
        code:"8b358ccf"
    }
]

export default {
    loadCertificates: function (context) {
        if (context.state.certificates.length === 0) {

            context.commit("setCertificates", certificates);
        }
    }
}
