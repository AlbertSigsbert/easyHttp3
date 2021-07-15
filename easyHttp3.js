class easyHttp{
     async get(url)
     {
         const response = await fetch(url);
         const data = await response.json();
         return data;
     }

     async post(url ,data)
     {
            const response = await fetch(url, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })

            const responseData = await response.json();
            return responseData;
     }

     async update(url ,data)
     {
            const response = await fetch(url, {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })

            const responseData = await response.json();
            return responseData;
     }

     async delete(url)
     {
        const response = await fetch(url, {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }})
        
        const responseData = await "Deleted Succesfully....";
        return responseData;
     }
}