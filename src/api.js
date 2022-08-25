
export const getTubeData = () => {
    return fetch("https://api.tfl.gov.uk/Line/Mode/Tube/Status")
    .then((res)=> {
        if(res.ok){
            return res.json();
        }
        else throw new Error("Invalid Response")
    })
}