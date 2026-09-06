        const rengler = ['red', 'green', 'blue',];

        const qutu = document.getElementById('reng-qutusu');

        rengler.forEach(reng => {
            const yeniElement = document.createElement('div');
            
            yeniElement.textContent = reng.toUpperCase(); 
            
            yeniElement.style.color = 'white';          
            yeniElement.style.backgroundColor = reng;   
            yeniElement.style.padding = '10px';        
            yeniElement.style.margin = '5px 0';         
            yeniElement.style.fontWeight = 'bold';      
            
            qutu.appendChild(yeniElement);
        });