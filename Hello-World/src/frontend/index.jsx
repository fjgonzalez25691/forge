import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Em, Strong, Lozenge, Button, Stack } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);
  return (
    <>
      <Text><Strong>Hello world!</Strong></Text>
      <Text><Em>And Hello World in italic</Em></Text>
      <Text>
        <Stack alignInline='start' space='space.250'>        
          <Lozenge appearance="removed">
            This a Lozenge. Hello!
          </Lozenge>

          <Button>
            Click me!
          </Button>
        </Stack>
      </Text>
      
      
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
