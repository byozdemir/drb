const DRBObject = {
  django: {
    app: "test",
    models: [
      {
        modelName: "Accounts",
        label: "Accounts",
        auth:["create","edit","delete","list"],
        fields: [
          {
            fieldName: "username",
            label: "User Name",
            type: "CharField",
            frontendType:'string',
            djangoAttrs: ["max_length=20",],
            reactAttrs:['min::3','max::10',]
          },
          {
            fieldName: "password",
            label: "Password",
            type: "CharField",
            frontendType:'string',
            serialize:false, // Use this prop if you don`t want to add this field to serializer.Default:true
            djangoAttrs: ["max_length=20"],
            reactAttrs:['min::8','max::32',]
          },
          {
            fieldName: "private_key",
            label: "private_key",
            type: "CharField",
            frontendType:'string',
            serialize:false,
            formItem:false, // Use this prop if you don`t want to add this field to frontend forms.Default:true
            djangoAttrs: ["max_length=20"],
          },
          {
            fieldName: "repassword",
            label: "Password",
            frontendType:'string',
            modelItem: false, //Use this prop if you don`t want to add this field to django model.Default:true
            reactAttrs:['min::8','max::32','required']
          },
        ],
      },
    ],
  },
  react: {
    create: ["form", "schema"],
  },
};
module.exports = {
  DRBObject,
};