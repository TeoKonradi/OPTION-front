// Name

export interface Name {
  eng: string;
  lng: string;
}

// Actions

// link

//     {
//       "type": "link",
//       "name": {"eng": "Add", "lng": "Add"},
//       "query": false,
//       "val": "users/create"
//     }

export interface ActionLink {
  name: Name;
  query: false;
  type: "link";
  val: string;
}

// - `type` - type of the action, always `link`
// - `name` - name of the action, on english and setting language
// - `query` - does action work for single object, of for the `query` list of objects, always `false`
// - `val` - link to redirect

// request

//     {
//       "type": "request",
//       "name": {"eng": "Delete", "lng": "Delete"},
//       "query": true,
//       "request_path": "users/del",
//       "request_type": "post",
//       "request_val": ["id"]
//     }

export interface ActionRequest {
  name: Name;
  query: true;
  request_path: string;
  request_type: "get" | "post";
  request_val: string[];
  type: "request";
}

// Permission
export interface Permission {
  permission: string;
}

// Group
export interface Group {
  group: any;
}
