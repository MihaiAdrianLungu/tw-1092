import { useState } from 'react';

function Contor() {
    const [contor, setContor] = useState(0);

    return (
        <div>
            {contor}
            <button onClick={() => setContor(contor + 1)}>Increment</button>
        </div>
    )
}

export default Contor;