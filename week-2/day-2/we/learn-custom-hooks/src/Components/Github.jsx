import {useEffect,useState} from "react"

function useGitHub(url){
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [data,setData] = useState([]);

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((d)=> d.json())
        .then(x =>{
            setLoading(false)
            setData(x.items)
            // console.log(x);
        })
        .catch((err)=>{
            setError(err)
            setLoading(false)
        })
    },[])
    return {loading,error,data}
}

export const Github=()=>{

    const {loading,error,data} = useGitHub(
        "https://api.github.com/search/users?q=masai&per_page=3"
    )

    console.log(data);

    return loading ? (
        "loading..."
    ) : error ? (
        "error"
    ) : (
        <div>
            {data.map((e,i)=>{
              return(
                  <div key={i}>
                      <h3>{e.login}</h3>
                      {/* <img style={{width:"20%"}} src={e.avatar_url} alt="" /> */}
                  </div>
              )
            })}
        </div>
    )

}