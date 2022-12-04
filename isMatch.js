function isMatch(s, p) {
  let match = false;
  let i = 0;
  if (p.indexOf('.*') >= 0) {
    match = true;
  }

  if (p.indexOf(s) >= 0) {
    match = true;
  }
  const start = p.indexOf(s[i]);
  const startAll = p.indexOf('.');
  if (start < 0 && startAll < 0) {
    match = false;
  } else {
    p = start >= 0 ? p.slice(start) : p.slice(startAll);
    for (let index = 1; index < s.length; index++) {
        const f = p[index]
        if (f==='*') {
            console.log(f,111111,index)
            match= matchCheck(s,p,index,index-1)
        }else{
            match= matchCheck(s,p,index,index)
        }
    }
  }
  return match;
}

const matchCheck = function(s,p,i,j){
    return s[i] ===p[j] || p[j]==='.'
}
isMatch('mississippi', 'mis*is*ip*.');
