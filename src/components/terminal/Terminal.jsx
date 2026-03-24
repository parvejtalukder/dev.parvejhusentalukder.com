import React from 'react';

const Terminal = () => {
    return (
        <div className="mockup-code w-full">
          <pre data-prefix="1"><code>const developer = {'{'}</code></pre>
          <pre data-prefix="2"><code>  name: 'Parvej Husen Talukder',</code></pre>
          <pre data-prefix="3"><code>  focus: 'Fullstack Mastery',</code></pre>
          <pre data-prefix="4"><code>  skills: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],</code></pre>
          <pre data-prefix="5"><code>  passionate: true,</code></pre>
          <pre data-prefix="6"><code>  motto: "Code with Purpose"</code></pre>
          <pre data-prefix="7"><code>{'}'};</code></pre>
          <pre data-prefix="8"><code>developer.showcase();</code></pre>
        </div>
    );
};

export default Terminal;