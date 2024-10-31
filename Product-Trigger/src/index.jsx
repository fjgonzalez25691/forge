//TODO: Add necessary importS to call a REST API
import api, { route } from "@forge/api";

export async function run(event, context) {
	//console.log('Hello World!');
	console.log(event);

	// TODO: Call  the Jira REST API to add comment to the issue.
	var bodyData = `{
		"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget venenatis elit. Duis eu justo eget augue iaculis fermentum. Sed semper quam laoreet nisi egestas at posuere augue semper."
		}
	  }`;

	  var issueIdOrKey = event.issue.id;
	  
	  const response = await api.asApp().requestJira(route`/rest/api/2/issue/${issueIdOrKey}/comment`, {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: bodyData
	  });
	  
	  console.log(`Response: ${response.status} ${response.statusText}`);
	  console.log(await response.json());
}

