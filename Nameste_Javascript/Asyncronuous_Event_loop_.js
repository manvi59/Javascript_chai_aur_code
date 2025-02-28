// console.log , setTimeout , setInterval , documnet these are the web API . not an part of javascript .. 

what happens first global function comes in callstack ..

then event loop check if the callstack is empty of not 

/// in the program setTimeOut APi call and register and wait unitll the 5 sec and time duration 

// then settimeout program comes in callback queue ..

/// event loop continually check the callstack is empty or not if it is empty then put settimeout api function in call stack for execution 

// event loop helps to schedule the task in call stack and continuously monitor the function execution in callback queue or callback stack---------------------


// fetch , promised is high priority of task or api .. first they wait for response then assign in the microtask queue .. which is having high priority of execution ...
