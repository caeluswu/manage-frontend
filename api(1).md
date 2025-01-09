# nmd-Swagger


<a name="overview"></a>
## Overview
Swagger


### Version information
*Version* : 9.0


### License information
*License* : The Apache License  
*License URL* : http://www.baidu.com  
*Terms of service* : null


### URI scheme
*Host* : localhost:9724  
*BasePath* : /


### Tags

* basic-error-controller : Basic Error Controller
* feign 统一接口类 : Feign Controller
* websocket非联调接口 : Web Socket Controller
* 日志接口 : Log Controller
* 用户接口 : Sys Auth User Controller
* 登录接口 : Login Controller
* 站内信接口 : Sys Messages Controller
* 菜单接口 : Sys Auth Menu Controller
* 角色接口 : Sys Auth Role Controller
* 认证校验接口 : License Controller
* 部门接口 : Sys Auth Department Controller




<a name="paths"></a>
## Paths

<a name="testusingget"></a>
### test
```
GET /auth/api/test/sss
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**prompt**  <br>*optional*|prompt|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* 登录接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="generateusingget"></a>
### 生成验证码
```
GET /auth/generate
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**uuid**  <br>*required*|uuid|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* 登录接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="loginusingpost"></a>
### 登录
```
POST /auth/login
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**code**  <br>*required*|验证码|string|
|**Query**|**password**  <br>*required*|密码, 前端需要 密码+用户名md5加密 传参|string|
|**Query**|**username**  <br>*required*|用户名|string|
|**Query**|**uuid**  <br>*required*|刚才生成验证码的uuid|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«LoginResponseVO»](#cfecb3c7702efc268982d334c1f0d22e)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 登录接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="logoutusingpost"></a>
### 用户退出
```
POST /auth/logout
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 登录接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="testloginusingpost"></a>
### 测试登录
```
POST /auth/testLogin
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**id**  <br>*optional*|id|integer(int64)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 登录接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="adjustdeptusingpost"></a>
### 调整人员部门
```
POST /dept/adjustDept
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**deptId**  <br>*required*|部门id|string|
|**Query**|**userIds**  <br>*required*|人员id字符串，用逗号分割|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 部门接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="delbyidsusingpost"></a>
### 删除部门，前端控制不能删除有子部门的数据
```
POST /dept/delByIds
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|部门id字符串，已逗号分割|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 部门接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="getuserbydeptidusingpost"></a>
### 获取当前部门的用户
```
POST /dept/getUserByDeptId
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**id**  <br>*required*|部门id|string|
|**Query**|**name**  <br>*optional*|用户姓名|string|
|**Query**|**userName**  <br>*optional*|登录用户|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«DeptUserVO»»](#882d0e7994a3a875d2de259eebf85dd6)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 部门接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="insertusingpost"></a>
### 新增部门
```
POST /dept/insert
```


#### Parameters

|Type|Name|Description|Schema|Default|
|---|---|---|---|---|
|**Query**|**description**  <br>*optional*|部门描述|string||
|**Query**|**name**  <br>*required*|部门名称|string||
|**Query**|**pid**  <br>*required*|部门pid|string|`"0"`|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 部门接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="selectbysearchvalusingpost"></a>
### 部门列表,前端自行构建树
```
POST /dept/selectBySearchVal
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**name**  <br>*optional*|name|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 部门接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="updatebyidusingpost"></a>
### 修改部门
```
POST /dept/updateById
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**description**  <br>*optional*|部门描述|string|
|**Query**|**id**  <br>*required*|部门id|string|
|**Query**|**name**  <br>*required*|部门名称|string|
|**Query**|**pid**  <br>*required*|部门pid|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 部门接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="errorusingpost"></a>
### error
```
POST /error
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< string, object > map|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* basic-error-controller


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="errorusingget"></a>
### error
```
GET /error
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< string, object > map|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* basic-error-controller


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="errorusingput"></a>
### error
```
PUT /error
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< string, object > map|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* basic-error-controller


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="errorusingdelete"></a>
### error
```
DELETE /error
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< string, object > map|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Produces

* `*/*`


#### Tags

* basic-error-controller


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="errorusingpatch"></a>
### error
```
PATCH /error
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< string, object > map|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* basic-error-controller


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="errorusinghead"></a>
### error
```
HEAD /error
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< string, object > map|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* basic-error-controller


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="errorusingoptions"></a>
### error
```
OPTIONS /error
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|< string, object > map|
|**204**|No Content|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* basic-error-controller


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="getinfobyuseridlistusingpost"></a>
### 远程通过用户id集合获取用户信息集合
```
POST /feign/getInfoByUserIdList
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**userIdList**  <br>*required*|userIdList|< integer(int64) > array(multi)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«UserModelDTO»»](#78a7c6530470affe383f9f81c1687967)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* feign 统一接口类


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="getroleidbyuseridusingget"></a>
### 远程通过用户id获取角色key集合
```
GET /feign/getRoleIdByUserId
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**userId**  <br>*required*|userId|integer(int64)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«long»»](#2641c3aac3eb8818df4f2afa1226f563)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* feign 统一接口类


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="getrolekeylistbyuseridusingget"></a>
### 远程通过用户id获取角色key集合
```
GET /feign/getRoleKeyListByUserId
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**userId**  <br>*required*|userId|integer(int64)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«string»»](#4b4c9b95def0134bb81c0e87ef5b2fcc)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* feign 统一接口类


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="getunionpermissionusingget"></a>
### 远程通过用户id获取权限key集合
```
GET /feign/getUnionPermission
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**userId**  <br>*required*|userId|integer(int64)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«string»»](#4b4c9b95def0134bb81c0e87ef5b2fcc)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* feign 统一接口类


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="savemessageusingpost"></a>
### 保存消息
```
POST /feign/saveMessage
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**messageDTO**  <br>*required*|messageDTO|[MessageDTO](#messagedto)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* feign 统一接口类


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="saveoperationlogusingpost"></a>
### 保存日志
```
POST /feign/saveOperationLog
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**sysOperationLog**  <br>*required*|sysOperationLog|[SysOperationLog](#sysoperationlog)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* feign 统一接口类


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="getserverinfosusingpost"></a>
### getServerInfos
```
POST /license/getServerInfos
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**osName**  <br>*optional*|osName|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«LicenseCheckModel»](#e6a9ae9b211d24bd6985b3a21ea63cfa)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 认证校验接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="uploadusingpost"></a>
### 上传证书
```
POST /license/upload
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**FormData**|**file**  <br>*required*|证书|ref|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `multipart/form-data`


#### Produces

* `*/*`


#### Tags

* 认证校验接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="authlogsusingpost"></a>
### 认证日志
```
POST /log/authLogs
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**status**  <br>*optional*|成功  失败|string|
|**Query**|**type**  <br>*optional*|delete update insert|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«SysAuthLogDO»»](#416a1d03d3cc00154e3f196b3a26399c)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 日志接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="loginlogsusingpost"></a>
### 登录日志
```
POST /log/login
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**status**  <br>*optional*|1 成功  0 失败|string|
|**Query**|**userName**  <br>*optional*|查找的用户名|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 日志接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="operationlogsusingpost"></a>
### 操作日志
```
POST /log/operation
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**status**  <br>*optional*|1 成功  0 失败|string|
|**Query**|**type**  <br>*optional*|select delete update insert|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«SysOperationLogVO»»](#61d6445dfd7c116ac588ac566a66359a)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 日志接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="delbyidsusingget"></a>
### 删除菜单，前端控制不能删除有子菜单的数据
```
GET /menu/delByIds
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|菜单id字符串|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* 菜单接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="insertusingpost_1"></a>
### 新增菜单
```
POST /menu/insert
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**icon**  <br>*optional*|图标|string|
|**Query**|**menuType**  <br>*required*|菜单类型（C目录 M菜单 F按钮）|string|
|**Query**|**name**  <br>*required*|菜单名称|string|
|**Query**|**path**  <br>*optional*|路径|string|
|**Query**|**permissions**  <br>*optional*|权限码|string|
|**Query**|**pid**  <br>*required*|pid|string|
|**Query**|**sort**  <br>*optional*|排序字段|ref|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 菜单接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="selectonebyidusingget"></a>
### 单个菜单详情
```
GET /menu/selectOneById
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**id**  <br>*required*|菜单id|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* 菜单接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="selecttreeusingget"></a>
### 菜单树形列表
```
GET /menu/selectPage
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**name**  <br>*optional*|菜单名称|string|
|**Query**|**visible**  <br>*optional*|菜单状态（0显示 1隐藏）|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* 菜单接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="updatebymenuidusingpost"></a>
### 修改菜单
```
POST /menu/updateByRoleId
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**icon**  <br>*optional*|图标|string|
|**Query**|**id**  <br>*required*|菜单id|string|
|**Query**|**menuType**  <br>*required*|菜单类型（C目录 M菜单 F按钮）|string|
|**Query**|**name**  <br>*required*|菜单名称|string|
|**Query**|**path**  <br>*optional*|路径|string|
|**Query**|**permissions**  <br>*optional*|权限码|string|
|**Query**|**pid**  <br>*required*|pid|string|
|**Query**|**sort**  <br>*optional*|排序字段|ref|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 菜单接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="dealmessageusingpost"></a>
### 当前消息置为已读/未读
```
POST /message/dealMessage
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|消息id字符串|string|
|**Query**|**status**  <br>*required*|1 未读  2 已读|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 站内信接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="getmessagelistusingpost"></a>
### 查看当前用户的消息（2已读 1未读）
```
POST /message/getMessageList
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**status**  <br>*optional*|1 未读  2 已读 不传查所有|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«SysMessagesDO对象»»](#b2dc9ec8c2385734b26595ced29787f7)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 站内信接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="messagecntusingpost"></a>
### 当前用户已读/未读消息数量
```
POST /message/messageCnt
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**status**  <br>*required*|1 未读  2 已读|string|
|**Query**|**userId**  <br>*required*|用户id|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«int»](#eb624c85cf42b145a3e255e47af671f8)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 站内信接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="delbyidsusingget_1"></a>
### 删除角色
```
GET /role/delByIds
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|角色id字符串|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* 角色接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="getuserbyroleidusingget"></a>
### 用户角色列表
```
GET /role/getUserByRoleId
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**id**  <br>*required*|角色id|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«RoleUserVO»»](#529c8bf84ddaee0272a389e6a6ccf24f)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* 角色接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="insertusingpost_2"></a>
### 新增角色
```
POST /role/insert
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**description**  <br>*optional*|角色说明|string|
|**Query**|**menuIds**  <br>*required*|菜单id字符串|string|
|**Query**|**roleKey**  <br>*required*|角色权限字符串，英文和下划线组成|string|
|**Query**|**roleName**  <br>*required*|角色名称|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 角色接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="selectonebyidusingget_1"></a>
### 单个角色详情
```
GET /role/selectOneById
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**id**  <br>*required*|角色id|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* 角色接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="selectpageusingget"></a>
### 角色列表
```
GET /role/selectPage
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**roleName**  <br>*optional*|角色名称|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«SysAuthRoleDO对象»»](#631d770d2eec6b57d5855861fc775f9b)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* 角色接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="updatebyidusingpost_1"></a>
### 修改角色
```
POST /role/updateById
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**description**  <br>*optional*|角色说明|string|
|**Query**|**id**  <br>*required*|角色id|string|
|**Query**|**menuIds**  <br>*required*|菜单id字符串|string|
|**Query**|**roleKey**  <br>*required*|角色权限字符串，英文和下划线组成|string|
|**Query**|**roleName**  <br>*required*|角色名称|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 角色接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="delbyidsusingpost_1"></a>
### 删除用户
```
POST /user/delByIds
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**ids**  <br>*required*|用户id字符串，已逗号分割|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 用户接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="insertusingpost_3"></a>
### 新增用户
```
POST /user/insert
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**deptId**  <br>*optional*|部门id|string|
|**Query**|**email**  <br>*optional*|邮箱|string|
|**Query**|**name**  <br>*required*|姓名|string|
|**Query**|**password**  <br>*required*|密码|string|
|**Query**|**phone**  <br>*optional*|手机号|string|
|**Query**|**roleIds**  <br>*required*|角色id集合，以逗号分割|string|
|**Query**|**userName**  <br>*required*|用户名|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 用户接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="kickoutusingpost"></a>
### 踢人下线
```
POST /user/kickout
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**id**  <br>*required*|用户id|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 用户接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="onlineusingget"></a>
### 在线用户
```
GET /user/onLine
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**length**  <br>*required*|分页参数|string|
|**Query**|**start**  <br>*required*|分页参数|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«OnLineUserVO»»](#df4dc480736a26ac5c411f3f4d128be6)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* 用户接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="selectbysearchvalusingpost_1"></a>
### 用户列表
```
POST /user/selectBySearchVal
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**searchVal**  <br>*optional*|用户名称|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«List«SysAuthUserPageVO»»](#58761f44e9ce27cd5fe7eac567e25e0a)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 用户接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="selectonebyidusingpost"></a>
### 查询具体的某个用户信息
```
POST /user/selectOneById
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**id**  <br>*required*|用户id|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 用户接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="updatebyidusingpost_2"></a>
### 修改用户
```
POST /user/updateById
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**deptId**  <br>*optional*|部门id|string|
|**Query**|**email**  <br>*optional*|邮箱|string|
|**Query**|**id**  <br>*required*|用户id|string|
|**Query**|**name**  <br>*required*|姓名|string|
|**Query**|**phone**  <br>*optional*|手机号|string|
|**Query**|**roleIds**  <br>*required*|角色id集合，以逗号分割|string|
|**Query**|**userName**  <br>*required*|用户名|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 用户接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="updatepasswordusingpost"></a>
### 修改用户密码
```
POST /user/updatePassword
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**id**  <br>*required*|用户id|string|
|**Query**|**newPassword**  <br>*required*|新密码-密码+用户名md5加密 传参|string|
|**Query**|**oldPassword**  <br>*required*|旧密码-密码+用户名md5加密 传参|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 用户接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="updatestatususingpost"></a>
### 修改用户状态
```
POST /user/updateStatus
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**id**  <br>*required*|用户id|string|
|**Query**|**status**  <br>*required*|帐号状态（1正常 2停用）|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* 用户接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="closeconnectusingpost"></a>
### closeConnect
```
POST /websocket-manage/close
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* websocket非联调接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="sendusingpost"></a>
### send
```
POST /websocket-manage/send
```


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Query**|**userId**  <br>*optional*|userId|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型](#5be682dc0f4f1172460b78442ef3e7a2)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `*/*`


#### Tags

* websocket非联调接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|


<a name="statususingget"></a>
### status
```
GET /websocket-manage/status
```


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[响应基础模型«JSONObject»](#d70b5fd1376e6202f238e411d5b4660b)|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Produces

* `*/*`


#### Tags

* websocket非联调接口


#### Security

|Type|Name|Scopes|
|---|---|---|
|**apiKey**|**[token](#token)**|global|




<a name="definitions"></a>
## Definitions

<a name="deptuservo"></a>
### DeptUserVO

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*|创建时间|string|
|**deptId**  <br>*optional*|部门id|integer(int64)|
|**email**  <br>*optional*|邮箱|string|
|**id**  <br>*optional*|用户id|integer(int64)|
|**name**  <br>*optional*|姓名|string|
|**phone**  <br>*optional*|手机号|string|
|**status**  <br>*optional*|帐号状态（1正常 2停用 3锁定）|string|
|**userName**  <br>*optional*|用户名|string|


<a name="file"></a>
### File

|Name|Schema|
|---|---|
|**absolute**  <br>*optional*|boolean|
|**absoluteFile**  <br>*optional*|[File](#file)|
|**absolutePath**  <br>*optional*|string|
|**canonicalFile**  <br>*optional*|[File](#file)|
|**canonicalPath**  <br>*optional*|string|
|**directory**  <br>*optional*|boolean|
|**executable**  <br>*optional*|boolean|
|**file**  <br>*optional*|boolean|
|**freeSpace**  <br>*optional*|integer(int64)|
|**hidden**  <br>*optional*|boolean|
|**lastModified**  <br>*optional*|integer(int64)|
|**name**  <br>*optional*|string|
|**parent**  <br>*optional*|string|
|**parentFile**  <br>*optional*|[File](#file)|
|**path**  <br>*optional*|string|
|**readable**  <br>*optional*|boolean|
|**totalSpace**  <br>*optional*|integer(int64)|
|**usableSpace**  <br>*optional*|integer(int64)|
|**writable**  <br>*optional*|boolean|


<a name="inputstream"></a>
### InputStream
*Type* : object


<a name="jsonobject"></a>
### JSONObject
*Type* : < string, object > map


<a name="licensecheckmodel"></a>
### LicenseCheckModel

|Name|Schema|
|---|---|
|**macAddress**  <br>*optional*|< string > array|
|**type**  <br>*optional*|string|


<a name="loginresponsevo"></a>
### LoginResponseVO

|Name|Schema|
|---|---|
|**buttonList**  <br>*optional*|< string, < string > array > map|
|**deptName**  <br>*optional*|string|
|**licenseDays**  <br>*optional*|integer(int32)|
|**menuList**  <br>*optional*|< [SysAuthMenuDO对象](#37cdb63c335b5d35fdebace05996aeae) > array|
|**tokenKey**  <br>*optional*|string|
|**tokenValue**  <br>*optional*|string|
|**userId**  <br>*optional*|integer(int64)|
|**userName**  <br>*optional*|string|


<a name="messagedto"></a>
### MessageDTO

|Name|Description|Schema|
|---|---|---|
|**content**  <br>*optional*|消息的内容|string|
|**receiverIds**  <br>*optional*|接收者的用户ID|string|
|**senderId**  <br>*optional*|发送者的用户ID|integer(int64)|
|**senderName**  <br>*optional*|发送者名称|string|
|**subject**  <br>*optional*|消息的主题|string|


<a name="modelandview"></a>
### ModelAndView

|Name|Schema|
|---|---|
|**empty**  <br>*optional*|boolean|
|**model**  <br>*optional*|object|
|**modelMap**  <br>*optional*|< string, object > map|
|**reference**  <br>*optional*|boolean|
|**status**  <br>*optional*|enum (100 CONTINUE, 101 SWITCHING_PROTOCOLS, 102 PROCESSING, 103 CHECKPOINT, 200 OK, 201 CREATED, 202 ACCEPTED, 203 NON_AUTHORITATIVE_INFORMATION, 204 NO_CONTENT, 205 RESET_CONTENT, 206 PARTIAL_CONTENT, 207 MULTI_STATUS, 208 ALREADY_REPORTED, 226 IM_USED, 300 MULTIPLE_CHOICES, 301 MOVED_PERMANENTLY, 302 FOUND, 302 MOVED_TEMPORARILY, 303 SEE_OTHER, 304 NOT_MODIFIED, 305 USE_PROXY, 307 TEMPORARY_REDIRECT, 308 PERMANENT_REDIRECT, 400 BAD_REQUEST, 401 UNAUTHORIZED, 402 PAYMENT_REQUIRED, 403 FORBIDDEN, 404 NOT_FOUND, 405 METHOD_NOT_ALLOWED, 406 NOT_ACCEPTABLE, 407 PROXY_AUTHENTICATION_REQUIRED, 408 REQUEST_TIMEOUT, 409 CONFLICT, 410 GONE, 411 LENGTH_REQUIRED, 412 PRECONDITION_FAILED, 413 PAYLOAD_TOO_LARGE, 413 REQUEST_ENTITY_TOO_LARGE, 414 URI_TOO_LONG, 414 REQUEST_URI_TOO_LONG, 415 UNSUPPORTED_MEDIA_TYPE, 416 REQUESTED_RANGE_NOT_SATISFIABLE, 417 EXPECTATION_FAILED, 418 I_AM_A_TEAPOT, 419 INSUFFICIENT_SPACE_ON_RESOURCE, 420 METHOD_FAILURE, 421 DESTINATION_LOCKED, 422 UNPROCESSABLE_ENTITY, 423 LOCKED, 424 FAILED_DEPENDENCY, 425 TOO_EARLY, 426 UPGRADE_REQUIRED, 428 PRECONDITION_REQUIRED, 429 TOO_MANY_REQUESTS, 431 REQUEST_HEADER_FIELDS_TOO_LARGE, 451 UNAVAILABLE_FOR_LEGAL_REASONS, 500 INTERNAL_SERVER_ERROR, 501 NOT_IMPLEMENTED, 502 BAD_GATEWAY, 503 SERVICE_UNAVAILABLE, 504 GATEWAY_TIMEOUT, 505 HTTP_VERSION_NOT_SUPPORTED, 506 VARIANT_ALSO_NEGOTIATES, 507 INSUFFICIENT_STORAGE, 508 LOOP_DETECTED, 509 BANDWIDTH_LIMIT_EXCEEDED, 510 NOT_EXTENDED, 511 NETWORK_AUTHENTICATION_REQUIRED)|
|**view**  <br>*optional*|[View](#view)|
|**viewName**  <br>*optional*|string|


<a name="onlineuservo"></a>
### OnLineUserVO

|Name|Description|Schema|
|---|---|---|
|**browserType**  <br>*optional*|登录浏览器类型|string|
|**id**  <br>*optional*||integer(int64)|
|**loginIp**  <br>*optional*|最后一次登陆ip|string|
|**loginTime**  <br>*optional*|最后一次登陆时间|string|
|**name**  <br>*optional*|姓名|string|
|**onLineCount**  <br>*optional*|在线数量|integer(int32)|
|**userName**  <br>*optional*|用户名|string|


<a name="resource"></a>
### Resource

|Name|Schema|
|---|---|
|**description**  <br>*optional*|string|
|**file**  <br>*optional*|[File](#file)|
|**filename**  <br>*optional*|string|
|**inputStream**  <br>*optional*|[InputStream](#inputstream)|
|**open**  <br>*optional*|boolean|
|**readable**  <br>*optional*|boolean|
|**uri**  <br>*optional*|[URI](#uri)|
|**url**  <br>*optional*|[URL](#url)|


<a name="roleuservo"></a>
### RoleUserVO

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*|创建时间|string|
|**deptId**  <br>*optional*|部门id|integer(int64)|
|**deptName**  <br>*optional*|部门名称|string|
|**email**  <br>*optional*|邮箱|string|
|**id**  <br>*optional*|用户id|integer(int64)|
|**name**  <br>*optional*|姓名|string|
|**phone**  <br>*optional*|手机号|string|
|**status**  <br>*optional*|帐号状态（1正常 2停用 3锁定）|string|
|**userName**  <br>*optional*|用户名|string|


<a name="sysauthlogdo"></a>
### SysAuthLogDO

|Name|Description|Schema|
|---|---|---|
|**address**  <br>*optional*|IP地址|string|
|**comment**  <br>*optional*|事件|string|
|**id**  <br>*optional*||integer(int64)|
|**newParam**  <br>*optional*||string|
|**oldParam**  <br>*optional*||string|
|**status**  <br>*optional*|登录状态|string|
|**times**  <br>*optional*|时间|string|
|**type**  <br>*optional*|操作类型|string|
|**userName**  <br>*optional*|用户名|string|


<a name="37cdb63c335b5d35fdebace05996aeae"></a>
### SysAuthMenuDO对象
A系统菜单表（初始化数据）


|Name|Description|Schema|
|---|---|---|
|**checked**  <br>*optional*||boolean|
|**child**  <br>*optional*||< [SysAuthMenuDO对象](#37cdb63c335b5d35fdebace05996aeae) > array|
|**createBy**  <br>*optional*||string|
|**createTime**  <br>*optional*||string|
|**del**  <br>*optional*|是否删除 1 已删除 0 未删除|string|
|**icon**  <br>*optional*||string|
|**id**  <br>*optional*||integer(int64)|
|**menuType**  <br>*optional*|菜单类型（C目录 M菜单 F按钮）|string|
|**name**  <br>*optional*|菜单名称|string|
|**pName**  <br>*optional*||string|
|**path**  <br>*optional*|路径|string|
|**permissions**  <br>*optional*|权限码|string|
|**pid**  <br>*optional*|pid|integer(int64)|
|**pids**  <br>*optional*|pid集合|string|
|**sort**  <br>*optional*|排序字段|integer(int32)|
|**updateBy**  <br>*optional*||string|
|**updateTime**  <br>*optional*||string|
|**visible**  <br>*optional*|菜单状态（0显示 1隐藏）|string|


<a name="0b7310f06cabca21b29af5b80666be90"></a>
### SysAuthRoleDO对象
A1系统角色表（初始化数据）


|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*|创建时间|string|
|**del**  <br>*optional*|删除标志 1 删除 0未删除|string|
|**description**  <br>*optional*|角色说明|string|
|**id**  <br>*optional*||integer(int64)|
|**roleKey**  <br>*optional*|角色权限字符串，唯一|string|
|**roleName**  <br>*optional*|角色名称|string|
|**updateTime**  <br>*optional*|更新时间|string|


<a name="sysauthuserpagevo"></a>
### SysAuthUserPageVO

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*|创建时间|string|
|**deptId**  <br>*optional*|部门id|integer(int64)|
|**deptName**  <br>*optional*|部门名称|string|
|**email**  <br>*optional*|邮箱|string|
|**id**  <br>*optional*||integer(int64)|
|**loginIp**  <br>*optional*|最后一次登陆ip|string|
|**loginTime**  <br>*optional*|最后一次登陆时间|string|
|**name**  <br>*optional*|姓名|string|
|**password**  <br>*optional*|密码|string|
|**phone**  <br>*optional*|手机号|string|
|**status**  <br>*optional*|帐号状态（1正常 2停用 3锁定）|string|
|**updateTime**  <br>*optional*|更新时间|string|
|**userName**  <br>*optional*|用户名|string|


<a name="52987a3672bdc7cdbc9e7a805fdaf24f"></a>
### SysMessagesDO对象
存储站内信的消息表


|Name|Description|Schema|
|---|---|---|
|**content**  <br>*optional*|消息的内容|string|
|**createdTime**  <br>*optional*|消息创建时间|string|
|**id**  <br>*optional*||integer(int64)|
|**readTime**  <br>*optional*|消息最后更新的时间|string|
|**receiverId**  <br>*optional*|接收者的用户ID，外键关联到users表的user_id|integer(int64)|
|**senderId**  <br>*optional*|发送者的用户ID，外键关联到users表的user_id|integer(int64)|
|**senderName**  <br>*optional*|发送者名称，sender_id有可能为空|string|
|**status**  <br>*optional*|消息的状态 1 未读  2 已读|string|
|**subject**  <br>*optional*|消息的主题|string|


<a name="sysoperationlog"></a>
### SysOperationLog

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*||string|
|**createUserId**  <br>*optional*||integer(int64)|
|**id**  <br>*optional*||integer(int64)|
|**ip**  <br>*optional*|访问IP地址|string|
|**method**  <br>*optional*|请求方法|string|
|**module**  <br>*optional*|模块名称|string|
|**msg**  <br>*optional*|日志消息|string|
|**operateTime**  <br>*optional*|执行时长|integer(int64)|
|**params**  <br>*optional*|操作提交的数据|string|
|**result**  <br>*optional*|操作结果|string|
|**status**  <br>*optional*|操作状态|string|
|**traceId**  <br>*optional*|追踪ID|string|
|**type**  <br>*optional*|操作类型|string|
|**uri**  <br>*optional*|请求URI|string|
|**userAgent**  <br>*optional*|用户代理|string|


<a name="sysoperationlogvo"></a>
### SysOperationLogVO

|Name|Description|Schema|
|---|---|---|
|**createTime**  <br>*optional*||string|
|**createUserId**  <br>*optional*||integer(int64)|
|**createUserName**  <br>*optional*||string|
|**id**  <br>*optional*||integer(int64)|
|**ip**  <br>*optional*|访问IP地址|string|
|**method**  <br>*optional*|请求方法|string|
|**module**  <br>*optional*|模块名称|string|
|**msg**  <br>*optional*|日志消息|string|
|**operateTime**  <br>*optional*|执行时长|integer(int64)|
|**params**  <br>*optional*|操作提交的数据|string|
|**result**  <br>*optional*|操作结果|string|
|**status**  <br>*optional*|操作状态|string|
|**type**  <br>*optional*|操作类型|string|
|**uri**  <br>*optional*|请求URI|string|
|**userAgent**  <br>*optional*|用户代理|string|


<a name="uri"></a>
### URI

|Name|Schema|
|---|---|
|**absolute**  <br>*optional*|boolean|
|**authority**  <br>*optional*|string|
|**fragment**  <br>*optional*|string|
|**host**  <br>*optional*|string|
|**opaque**  <br>*optional*|boolean|
|**path**  <br>*optional*|string|
|**port**  <br>*optional*|integer(int32)|
|**query**  <br>*optional*|string|
|**rawAuthority**  <br>*optional*|string|
|**rawFragment**  <br>*optional*|string|
|**rawPath**  <br>*optional*|string|
|**rawQuery**  <br>*optional*|string|
|**rawSchemeSpecificPart**  <br>*optional*|string|
|**rawUserInfo**  <br>*optional*|string|
|**scheme**  <br>*optional*|string|
|**schemeSpecificPart**  <br>*optional*|string|
|**userInfo**  <br>*optional*|string|


<a name="url"></a>
### URL

|Name|Schema|
|---|---|
|**authority**  <br>*optional*|string|
|**content**  <br>*optional*|object|
|**defaultPort**  <br>*optional*|integer(int32)|
|**deserializedFields**  <br>*optional*|[URLStreamHandler](#urlstreamhandler)|
|**file**  <br>*optional*|string|
|**host**  <br>*optional*|string|
|**path**  <br>*optional*|string|
|**port**  <br>*optional*|integer(int32)|
|**protocol**  <br>*optional*|string|
|**query**  <br>*optional*|string|
|**ref**  <br>*optional*|string|
|**serializedHashCode**  <br>*optional*|integer(int32)|
|**userInfo**  <br>*optional*|string|


<a name="urlstreamhandler"></a>
### URLStreamHandler
*Type* : object


<a name="usermodeldto"></a>
### UserModelDTO

|Name|Description|Schema|
|---|---|---|
|**deptId**  <br>*optional*||integer(int64)|
|**deptName**  <br>*optional*||string|
|**email**  <br>*optional*||string|
|**id**  <br>*optional*||integer(int64)|
|**isAdmin**  <br>*optional*|是否为管理员，1 是 0 否|string|
|**name**  <br>*optional*||string|
|**userName**  <br>*optional*||string|


<a name="view"></a>
### View

|Name|Schema|
|---|---|
|**contentType**  <br>*optional*|string|


<a name="5be682dc0f4f1172460b78442ef3e7a2"></a>
### 响应基础模型

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|object|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="d70b5fd1376e6202f238e411d5b4660b"></a>
### 响应基础模型«JSONObject»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< string, object > map|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="e6a9ae9b211d24bd6985b3a21ea63cfa"></a>
### 响应基础模型«LicenseCheckModel»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|[LicenseCheckModel](#licensecheckmodel)|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="882d0e7994a3a875d2de259eebf85dd6"></a>
### 响应基础模型«List«DeptUserVO»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< [DeptUserVO](#deptuservo) > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="df4dc480736a26ac5c411f3f4d128be6"></a>
### 响应基础模型«List«OnLineUserVO»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< [OnLineUserVO](#onlineuservo) > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="529c8bf84ddaee0272a389e6a6ccf24f"></a>
### 响应基础模型«List«RoleUserVO»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< [RoleUserVO](#roleuservo) > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="416a1d03d3cc00154e3f196b3a26399c"></a>
### 响应基础模型«List«SysAuthLogDO»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< [SysAuthLogDO](#sysauthlogdo) > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="631d770d2eec6b57d5855861fc775f9b"></a>
### 响应基础模型«List«SysAuthRoleDO对象»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< [SysAuthRoleDO对象](#0b7310f06cabca21b29af5b80666be90) > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="58761f44e9ce27cd5fe7eac567e25e0a"></a>
### 响应基础模型«List«SysAuthUserPageVO»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< [SysAuthUserPageVO](#sysauthuserpagevo) > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="b2dc9ec8c2385734b26595ced29787f7"></a>
### 响应基础模型«List«SysMessagesDO对象»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< [SysMessagesDO对象](#52987a3672bdc7cdbc9e7a805fdaf24f) > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="61d6445dfd7c116ac588ac566a66359a"></a>
### 响应基础模型«List«SysOperationLogVO»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< [SysOperationLogVO](#sysoperationlogvo) > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="78a7c6530470affe383f9f81c1687967"></a>
### 响应基础模型«List«UserModelDTO»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< [UserModelDTO](#usermodeldto) > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="2641c3aac3eb8818df4f2afa1226f563"></a>
### 响应基础模型«List«long»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< integer(int64) > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="4b4c9b95def0134bb81c0e87ef5b2fcc"></a>
### 响应基础模型«List«string»»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|< string > array|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="cfecb3c7702efc268982d334c1f0d22e"></a>
### 响应基础模型«LoginResponseVO»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|[LoginResponseVO](#loginresponsevo)|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|


<a name="eb624c85cf42b145a3e255e47af671f8"></a>
### 响应基础模型«int»

|Name|Description|Schema|
|---|---|---|
|**code**  <br>*optional*|返回码|string|
|**data**  <br>*optional*|返回数据|integer(int32)|
|**message**  <br>*optional*|返回码信息|string|
|**total**  <br>*optional*|分页总条数|integer(int32)|




<a name="securityscheme"></a>
## Security

<a name="token"></a>
### token
*Type* : apiKey  
*Name* : token  
*In* : HEADER



