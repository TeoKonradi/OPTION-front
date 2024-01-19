///////////////////////////////////////

import { ActionLink, ActionRequest, Name } from "./common";

// Field

export interface FORMfield {
  blank: boolean;
  default: number;
  editable: false;
  field: string;
  help_text: string;
  name: Name;
  read_only: boolean;
  unique: boolean;
  val: boolean | number | string;
}

///////////////////////////////////////

// Form

export interface FORM {
  actions: ActionLink[] | (ActionLink[] & ActionRequest[]) | ActionRequest[];
  form: any;
  object: string;
  widget: "form";
}

// # Form widget
// Json

// {
//   "widget": "form",

//   "object": "user",

//   "actions": [
//     {
//       "type": "link",
//       "name": {
//         "eng": "Add",
//         "lng": "Add"
//       },
//       "query": false,
//       "val": "users/create"
//     },
//     {
//       "type": "request",
//       "name": {
//         "eng": "Delete",
//         "lng": "Delete"
//       },
//       "query": true,
//       "request_path": "users/del",
//       "request_type": "post",
//       "request_val": [
//         "id"
//       ]
//     }
//   ],

//   "form": [

export interface AutoField {
  blank: boolean;
  default: number;
  editable: boolean;
  field: "auto_field";
  help_text: string;
  name: Name;
  read_only: boolean;
  unique: boolean;
  val: number;
}

//     {
//       "field": "auto_field",
//       "blank": false,
//       "read_only": true,
//       "default": 0,
//       "editable": false,
//       "help_text": "No help text for this field for now",
//       "unique": true,
//       "name": {
//         "eng": "ID",
//         "lng": "ID"
//       },
//       "val": 1
//     },

export interface DateTimeField {
  blank: boolean;
  default: string;
  editable: boolean;
  field: "date_time_field";
  help_text: string;
  name: Name;
  read_only: boolean;
  unique: boolean;
  val: null | string;
}

//     {
//       "field": "date_time_field",
//       "blank": true,
//       "read_only": true,
//       "default": "2023-08-15 19:29:02.42501+00",
//       "editable": false,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "created_at",
//         "lng": "created_at"
//       },
//       "val": "2023-08-15 19:29:02.42501+00"
//     },

//     {
//       "field": "date_time_field",
//       "blank": true,
//       "read_only": true,
//       "default": "2023-08-15 19:29:02.42501+00",
//       "editable": false,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "updated_at",
//         "lng": "updated_at"
//       },
//       "val": "2023-08-15 19:29:02.42501+00"
//     },

//     {
//       "field": "date_time_field",
//       "blank": true,
//       "read_only": true,
//       "default": null,
//       "editable": false,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "deleted_at",
//         "lng": "deleted_at"
//       },
//       "val": null
//     },

export interface CharField {
  blank: boolean;
  default: string;
  editable: boolean;
  field: "char_field";
  help_text: string;
  name: Name;
  read_only: boolean;
  unique: boolean;
  val: string;
}
//     {
//       "field": "char_field",
//       "blank": false,
//       "read_only": false,
//       "default": "",
//       "editable": true,
//       "help_text": "No help text for this field for now",
//       "unique": true,
//       "name": {
//         "eng": "username",
//         "lng": "username"
//       },
//       "val": "notadmin"
//     },

//     {
//       "field": "char_field",
//       "blank": false,
//       "read_only": false,
//       "default": "",
//       "editable": true,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "password",
//         "lng": "password"
//       },
//       "val": "PASSWORD HASH"
//     },

export interface ListField {
  blank: boolean;
  // write single fields
  default: any[];
  editable: boolean;
  field: "list_field";
  help_text: string;
  list_field:
    | "auto_field"
    | "bool_field"
    | "char_field"
    | "date_time_field"
    | "list_field"
    | "sub_form_field";
  name: Name;
  read_only: boolean;
  unique: boolean;
  val: (AutoField | BoolField | CharField | DateTimeField | ListField)[];
}

//     {
//       "field": "list_field",
//       "list_field": "char_field",
//       "blank": true,
//       "read_only": false,
//       "default": [],
//       "editable": true,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "permissions",
//         "lng": "permissions"
//       },
//       "val": [
//         {
//           "field": "char_field",
//           "blank": false,
//           "read_only": false,
//           "default": "",
//           "editable": true,
//           "help_text": "No help text for this field for now",
//           "unique": false,
//           "name": {
//             "eng": "permission",
//             "lng": "permission"
//           },
//           "val": "PERMISSION"
//         }
//       ]
//     },

export interface BoolField {
  blank: boolean;
  default: boolean;
  editable: boolean;
  field: "bool_field";
  help_text: string;
  name: Name;
  read_only: boolean;
  unique: boolean;
  val: boolean;
}
//     {
//       "field": "bool_field",
//       "blank": false,
//       "read_only": false,
//       "default": false,
//       "editable": true,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "active_user",
//         "lng": "active_user"
//       },
//       "val": true
//     },

//     {
//       "field": "bool_field",
//       "blank": false,
//       "read_only": false,
//       "default": false,
//       "editable": true,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "staff_user",
//         "lng": "staff_user"
//       },
//       "val": true
//     },

//     {
//       "field": "bool_field",
//       "blank": false,
//       "read_only": false,
//       "default": false,
//       "editable": true,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "super_user",
//         "lng": "super_user"
//       },
//       "val": false
//     },

//     {
//       "field": "list_field",
//       "blank": true,
//       "default": [],
//       "read_only": false,
//       "editable": true,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "admin_permissions_groups",
//         "lng": "admin_permissions_groups"
//       },
//       "val":[
export interface SubFormField {
  blank: boolean;
  editable: boolean;
  field: "sub_form_field";
  help_text: string;
  link: boolean;
  name: Name;
  read_only: boolean;
  unique: boolean;
  val: {
    actions: (ActionLink | ActionRequest)[];
    object: string;
    widget: "form";
  };
}
//         {
//           "field": "sub_form_field",
//           "blank": true,
//           "read_only": false,
//           "editable": true,
//           "help_text": "No help text for this field for now",
//           "unique": false,
//           "link": true,
//           "name": {
//             "eng": "admin_permissions_group",
//             "lng": "admin_permissions_group"
//           },
//           "val": {
//             "widget": "form",
//             "object": "user",
//             "actions": [
//               {
//                 "type": "link",
//                 "name": {
//                   "eng": "Add",
//                   "lng": "Add"
//                 },
//                 "query": false,
//                 "val": "users/create"
//               },
//               {
//                 "type": "request",
//                 "name": {
//                   "eng": "Delete",
//                   "lng": "Delete"
//                 },
//                 "query": true,
//                 "request_path": "users/del",
//                 "request_type": "post",
//                 "request_val": [
//                   "id"
//                 ]
//               }
//             ],
//             "form": [
//             {
//               "field": "auto_field",
//               "blank": false,
//               "read_only": true,
//               "default": 0,
//               "editable": false,
//               "help_text": "No help text for this field for now",
//               "unique": true,
//               "name": {
//                 "eng": "ID",
//                 "lng": "ID"
//               },
//               "val": 1
//             },
//             {
//               "field": "char_field",
//               "blank": false,
//               "read_only": false,
//               "default": "",
//               "editable": true,
//               "help_text": "No help text for this field for now",
//               "unique": true,
//               "name": {
//                 "eng": "tag",
//                 "lng": "tag"
//               },
//               "val": "some tag"
//             },
//             {
//               "field": "list_field",
//               "list_field": "char_field",
//               "blank": true,
//               "read_only": false,
//               "default": [],
//               "editable": true,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "permissions",
//                 "lng": "permissions"
//               },
//               "val": [
//                 {
//                   "field": "char_field",
//                   "blank": false,
//                   "read_only": false,
//                   "default": "",
//                   "editable": true,
//                   "help_text": "No help text for this field for now",
//                   "unique": false,
//                   "name": {
//                     "eng": "permission",
//                     "lng": "permission"
//                   },
//                   "val": "PERMISSION"
//                 }
//               ]
//             },

export interface LinkFormField {
  blank: true;
  editable: true;
  field: "link_form_field";
  help_text: "No help text for this field for now";
  name: Name;
  read_only: false;
  unique: false;
  val: number[];
}
// {
//   "field": "link_form_field",
//   "blank": true,
//   "read_only": false,
//   "editable": true,
//   "help_text": "No help text for this field for now",
//   "unique": false,
//   "name": {
//     "eng": "admin_users",
//     "lng": "admin_users"
//   },
//   "val": [
//     1,
//     2,
//     4
//   ]
// }
//           ]
//           }
//         }
//       ]
//     },

//     {
//       "field": "list_field",
//       "list_field": "sub_form_field",
//       "blank": true,
//       "read_only": false,
//       "default": [],
//       "editable": true,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "refresh_tokens",
//         "lng": "refresh_tokens"
//       },
//       "val": [
//         {
//           "field": "sub_form_field",
//           "blank": false,
//           "read_only": false,
//           "default": "",
//           "editable": true,
//           "help_text": "No help text for this field for now",
//           "unique": false,
//           "name": {
//             "eng": "refresh_token",
//             "lng": "refresh_token"
//           },
//           "val": [
//             {
//               "field": "auto_field",
//               "blank": false,
//               "read_only": true,
//               "default": 0,
//               "editable": false,
//               "help_text": "No help text for this field for now",
//               "unique": true,
//               "name": {
//                 "eng": "ID",
//                 "lng": "ID"
//               },
//               "val": 1
//             },
//             {
//               "field": "date_time_field",
//               "blank": true,
//               "read_only": true,
//               "default": "2023-08-15 19:29:02.42501+00",
//               "editable": false,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "created_at",
//                 "lng": "created_at"
//               },
//               "val": "2023-08-15 19:29:02.42501+00"
//             },
//             {
//               "field": "date_time_field",
//               "blank": true,
//               "read_only": true,
//               "default": "2023-08-15 19:29:02.42501+00",
//               "editable": false,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "updated_at",
//                 "lng": "updated_at"
//               },
//               "val": "2023-08-15 19:29:02.42501+00"
//             },
//             {
//               "field": "date_time_field",
//               "blank": true,
//               "read_only": true,
//               "default": null,
//               "editable": false,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "deleted_at",
//                 "lng": "deleted_at"
//               },
//               "val": null
//             },
//             {
//               "field": "char_field",
//               "blank": false,
//               "read_only": false,
//               "default": "",
//               "editable": true,
//               "help_text": "No help text for this field for now",
//               "unique": true,
//               "name": {
//                 "eng": "token",
//                 "lng": "token"
//               },
//               "val": "TOKEN"
//             },
//             {
//               "field": "bool_field",
//               "blank": false,
//               "read_only": false,
//               "default": false,
//               "editable": true,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "expired",
//                 "lng": "expired"
//               },
//               "val": false
//             },
//             {
//               "field": "char_field",
//               "blank": false,
//               "read_only": false,
//               "default": "",
//               "editable": true,
//               "help_text": "No help text for this field for now",
//               "unique": true,
//               "name": {
//                 "eng": "expired_reason",
//                 "lng": "expired_reason"
//               },
//               "val": "TOKEN"
//             },
//             {
//               "field": "bool_field",
//               "blank": false,
//               "read_only": false,
//               "default": false,
//               "editable": true,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "show",
//                 "lng": "show"
//               },
//               "val": false
//             }
//           ]
//         }
//       ]
//     },

//     {
//       "field": "list_field",
//       "list_field": "sub_form_field",
//       "blank": true,
//       "read_only": false,
//       "default": [],
//       "editable": true,
//       "help_text": "No help text for this field for now",
//       "unique": false,
//       "name": {
//         "eng": "access_token",
//         "lng": "access_token"
//       },
//       "val": [
//            {
//              "field": "sub_form_field",
//              "blank": false,
//              "read_only": false,
//              "default": "",
//              "editable": true,
//              "help_text": "No help text for this field for now",
//              "unique": false,
//              "name": {
//                "eng": "access_token",
//                "lng": "access_token"
//              },
//              "val": [
//             {
//               "field": "auto_field",
//               "blank": false,
//               "read_only": true,
//               "default": 0,
//               "editable": false,
//               "help_text": "No help text for this field for now",
//               "unique": true,
//               "name": {
//                 "eng": "ID",
//                 "lng": "ID"
//               },
//               "val": 1
//             },
//             {
//               "field": "date_time_field",
//               "blank": true,
//               "read_only": true,
//               "default": "2023-08-15 19:29:02.42501+00",
//               "editable": false,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "created_at",
//                 "lng": "created_at"
//               },
//               "val": "2023-08-15 19:29:02.42501+00"
//             },
//             {
//               "field": "date_time_field",
//               "blank": true,
//               "read_only": true,
//               "default": "2023-08-15 19:29:02.42501+00",
//               "editable": false,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "updated_at",
//                 "lng": "updated_at"
//               },
//               "val": "2023-08-15 19:29:02.42501+00"
//             },
//             {
//               "field": "date_time_field",
//               "blank": true,
//               "read_only": true,
//               "default": null,
//               "editable": false,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "deleted_at",
//                 "lng": "deleted_at"
//               },
//               "val": null
//             },
//             {
//               "field": "char_field",
//               "blank": false,
//               "read_only": false,
//               "default": "",
//               "editable": true,
//               "help_text": "No help text for this field for now",
//               "unique": true,
//               "name": {
//                 "eng": "token",
//                 "lng": "token"
//               },
//               "val": "TOKEN"
//             },
//             {
//               "field": "bool_field",
//               "blank": false,
//               "read_only": false,
//               "default": false,
//               "editable": true,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "expired",
//                 "lng": "expired"
//               },
//               "val": false
//             },
//             {
//               "field": "char_field",
//               "blank": false,
//               "read_only": false,
//               "default": "",
//               "editable": true,
//               "help_text": "No help text for this field for now",
//               "unique": true,
//               "name": {
//                 "eng": "expired_reason",
//                 "lng": "expired_reason"
//               },
//               "val": "TOKEN"
//             },
//             {
//               "field": "bool_field",
//               "blank": false,
//               "read_only": false,
//               "default": false,
//               "editable": true,
//               "help_text": "No help text for this field for now",
//               "unique": false,
//               "name": {
//                 "eng": "show",
//                 "lng": "show"
//               },
//               "val": false
//             }
//             ]
//           }
//         ]
//       }
//    ]
//  }

// # Huh
// Field

// {
//   "field": "date_time_field",
//   "blank": true,
//   "read_only": true,
//   "default": "2023-08-15 19:29:02.42501+00",
//   "editable": false,
//   "help_text": "No help text for this field for now",
//   "unique": false,
//   "name": {
//       "eng": "created_at",
//       "lng": "created_at"
//   },
//   "val": "2023-08-15 19:29:02.42501+00"
// }

// Existing fields
// auto_field
// date_time_field
// char_field
// bool_field
// list_field
// sub_form_field
