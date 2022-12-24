const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "data",
          isFolder: true,
          items: [
            {
              name: "folderData.js",
              isFolder: false
            }
          ]
        },
        {
          name: "App.js",
          isFolder: false
        },
        {
          name: "index.js",
          isFolder: false
        },
        {
          name: "style.css",
          isFolder: false
        }
      ]
    },
    {
      name: "package.json",
      isFolder: false
    }
  ]
};

export default explorer;
