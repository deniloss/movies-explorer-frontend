function getResponse(res) {
  if(res.ok) {
    console.log(res)
    return(res.json());
  } else {
    return(res.json());
  }
}


export default getResponse;
