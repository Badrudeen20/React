const Comments = {
      id:"1",
      name: "root",
      isReplay: true,
      replays: [
        {
          id:"2",
          name: "public",
          isReplay: true,
          replays: [
            {
              id:"3",
              name: "public nested 1",
              isReplay: true,
              replays: [
                {
                  id:"4",
                  name: "index.html",
                  isReplay: false,
                  replays: []
                },
                {
                  id:"5",
                  name: "hello.html",
                  isReplay: false,
                  replays: []
                }
              ]
            },
            {
              id:"6",
              name: "public_nested_file",
              isReplay: false,
              replays: []
            }
          ]
        },
        {
          id:"7",
          name: "src",
          isReplay: true,
          replays: [
            {
              id:"8",
              name: "App.js",
              isReplay: false,
              replays: []
            },
            {
              id:"9",
              name: "Index.js",
              isReplay: false,
              replays: []
            },
            {
              id:"10",
              name: "styles.css",
              isReplay: false,
              replays: []
            }
          ]
        },
        {
          id:"11",
          name: "package.json",
          isReplay: false,
          replays: []
        }
      ]
    };
    
export default Comments;