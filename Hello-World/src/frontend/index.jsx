import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Em, Strong, Lozenge, Button, Stack, Inline } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  //TODO: Make lozenge text (YES/NO) and appearance property (SUCCESS/REMOVED)
  //      non-static.

  const hasValidAssignee = true;
  const validAssigneeAppearance = (hasValidAssignee)?"success":"removed";
  const validAssigneeLozengeText = (hasValidAssignee)?"YES":"NO";

  const hasDescription = false;
  const descriptionAppearance = (hasDescription)?"success":"removed";
  const descriptionLozengeText = (hasDescription)?"YES":"NO";


  //TODO: Render the loznege and text components to mimic the design 
  //      up at the top right.
  return (
    <>
      <Stack>
        <Inline alignBlock='baseline' space="space.100">
          <Lozenge appearance= {validAssigneeAppearance}>{validAssigneeLozengeText}</Lozenge>
          <Text>This issue has a valid assignee that is different from the Reporter</Text>
        </Inline>

        <Inline alignBlock='baseline' space="space.100">
          <Lozenge appearance= {descriptionAppearance}>{descriptionLozengeText}</Lozenge>
          <Text>The issue has description</Text>
        </Inline>
      </Stack>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
