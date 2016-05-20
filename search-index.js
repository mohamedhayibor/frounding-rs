var searchIndex = {};
searchIndex["frounding"] = {"doc":"frounding is obivously a rust crate. The purpose of this crate is to change the rounding\nmode of the SSE and FPU unit when doing numeric operation. for some fields like interval arithmetic\nthe rounding mode (aka: rounding direction) is very important.","items":[[3,"RoundingState","frounding","Keep track of the current CPU rounding mode (both the SSE and the x87 FPU units).",null,null],[4,"RoundingMode","","Rounding direction",null,null],[13,"Default","","The default rounding when starting the program.",0,null],[13,"Upward","","Round upward ( toward positive infinity +inf )",0,null],[13,"Downward","","Round downward ( toward negative infinity -inf )",0,null],[13,"Nearest","","Round to nearest",0,null],[13,"ToZero","","Round tward zero ( truncate )",0,null],[11,"clone","","",0,{"inputs":[{"name":"roundingmode"}],"output":{"name":"roundingmode"}}],[11,"fmt","","",0,{"inputs":[{"name":"roundingmode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"roundingmode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"roundingstate"}],"output":{"name":"roundingstate"}}],[11,"fmt","","",1,{"inputs":[{"name":"roundingstate"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create new RoundingState struct and fill it with the current status of control regiters.\nWhen going out of scope the initial rounding mode is set.",1,{"inputs":[],"output":{"name":"self"}}],[11,"current_rounding","","Return the current rounding mode of both SSE and FPU.",1,null],[11,"sse_rounding","","Return the current rounding mode of the SSE unit.",1,{"inputs":[{"name":"roundingstate"}],"output":{"name":"roundingmode"}}],[11,"fpu_rounding","","Return the current rounding mode of x87 FPU unit.",1,{"inputs":[{"name":"roundingstate"}],"output":{"name":"roundingmode"}}],[11,"upward","","Set the rounding mode toward +infinity for both SSE and x87 FPU.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"sse_upward","","Set the rounding mode of the SSE toward +infinity.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"fpu_upward","","Set the rounding mode of the FPU toward +infinity.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"downward","","Set the rounding mode toward -infinity for both SSE and x87 FPU.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"sse_downward","","Set the rounding mode of the SSE toward -infinity.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"fpu_downward","","Set the rounding mode of the FPU toward -infinity.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"to_nearest","","Set the rounding mode to nearest for both SSE and x87 FPU.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"sse_to_nearest","","Set the rounding mode of the SSE to nearest",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"fpu_to_nearest","","Set the rounding mode of FPU to nearest",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"to_zero","","Set the rounding mode toward zero (aka truncate) for both SSE and x87 FPU.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"sse_to_zero","","Set the rounding mode of SSE toward zero (aka truncate)",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"fpu_to_zero","","Set the rounding mode of FPU toward zero (aka truncate)",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"reset","","Reset the rounding mode to the default one (the one found when calling the new function) for both FPU and SEE.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"sse_reset","","Reset the rounding mode to the default one (the one found when calling the new function) for SEE.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"fpu_reset","","Reset the rounding mode to the default one (the one found when calling the new function) for FPU.",1,{"inputs":[{"name":"roundingstate"}],"output":null}],[11,"drop","","",1,{"inputs":[{"name":"roundingstate"}],"output":null}]],"paths":[[4,"RoundingMode"],[3,"RoundingState"]]};
initSearch(searchIndex);