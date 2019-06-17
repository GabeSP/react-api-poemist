//Function js to truncate/cut string e put "..." at the end of content
//@param str: text string to truncate/cut. minimum size: 3
//@param size: string size before "..."
export const doTruncarStr = (str, size) => {
  if (str==undefined || str =='' || size==undefined || size ==''){
    return str;
  }

  let shortText = str;
  if(str.length >= size + 3){
    shortText = str.substring(0, size).concat('...');
  }
  return shortText;
}

export const doShortUrl = (url) => {
  if (url === undefined || url === '') {
    return url;
  }

  let shortUrl = url.replace(/(^\w+:|^)\/\//, '')
  return shortUrl
}
