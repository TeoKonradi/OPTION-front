// Content_type
// Json with the all types of content, each one have `key` and `type`

import { ActionLink, ActionRequest } from "./common";

// Example
// {
// "id": "int", 
// "username": "string", 
// "super_user": "bool", 
// "staff_user": "bool", 
// "last_login": "date"
// }

interface ListContent {
  id: number;
  [key: string]: any;
}

// - `key` - only string value, any length
// - `type` - type of the object, may be `string`/`int`/`float`/`bool`/`time`/`date`/`link`, more details below

// #### type
// - `string` - string, just string, length less than 255
// - `int` - integer
// - `float` - mathematical fraction
// - `bool` - bool value, may be `true` or `false`
// - `time` - time in format `{{HH}}:{{mm}}:{{ss}}.{{SSSSS}}+{{ZZ}}`, (`HH` - hour, `mm` - minute, `ss` - second, `SSSSS` - millisecond, `ZZ` - time zone hours)
// - `date` - full date with time, format `{{yyyy}}-{{MM}}-{{dd}} {{HH}}:{{mm}}:{{ss}}.{{SSSSS}}+{{ZZ}}`(`2023-08-15 19:29:02.42501+00`)(`yyyy` - year, `MM` - month, `dd` - day)
// - `link` - link path

// Pagination

//   {
//     "pagination": true,
//     "page": 1,
//     "pages": 10
//   }


interface ListPagination {
  pagination: boolean,
  page: number,
  pages: number,
}

////////////////////////////////

// Full element

// {
//   "widget": "list",
//   "object": "users",
//   "actions": [
//     {
//       "type": "link",
//       "name": {"eng": "Add", "lng": "Add"},
//       "query": false,
//       "val": "users/create"
//     },
//     {
//       "type": "request",
//       "name": {"eng": "Delete", "lng": "Delete"},
//       "query": true,
//       "request_path": "users/del",
//       "request_type": "post",
//       "request_val": ["id"]
//     }
//   ],
//   "content_type": {
//     "id": "int",
//     "username": "string",
//     "super_user": "bool",
//     "staff_user": "bool",
//     "last_login": "date"
//     },
//   "content": [
//     {
//       "id": 1,
//       "username": "notadmin",
//       "super_user": false,
//       "staff_user": true,
//       "last_login": "2023-08-15 19:29:02.42501+00"
//     }
//   ],
//   "pagination": {
//     "pagination": true,
//     "page": 1,
//     "pages": 10
//   }
// }

export interface ListItem{
  widget: "list";
  object: string;
  actions: ActionLink[] | ActionRequest[] | ActionLink[] & ActionRequest[];
  content_type: ListContent;
  content: ListContent[];
  pagination: ListPagination
}

// ## Explanation
// - `widget` - the widget type, always `list`
// - `object` - object type, need for request to backend on link `{{connection}}/widget/list/{{object}}`
// - `actions` - a list of actions for the list, more details below
// - `content_type` - fields ant fields types (columns)
// - `content` - list of the objects
// - `pagination` - pagination data, more details below

