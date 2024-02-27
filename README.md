# habit_tracker


## Notes
nodeIntegration: true is a security risk only when you're executing some untrusted remote code on your application. For example, suppose your application opens up a third party webpage. That would be a security risk because the third party webpage will have access to node runtime and can run some malicious code on your user's filesystem. In that case it makes sense to set nodeIntegration: false. If your app is not displaying any remote content, or is displaying only trusted content, then setting nodeIntegration: true is okay