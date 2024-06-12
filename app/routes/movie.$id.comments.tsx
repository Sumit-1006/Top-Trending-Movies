import {
    Form,
    
  } from "@remix-run/react";
export default function Comments() {
  
    return (
      <div className="rounded-lg border p-3">
        <h1 className="text-xl font-semibold mb-5">Your Opinion</h1>
  
        <div>
          <Form method="POST">
            <textarea
              name="comment"
              className="w-full border border-teal-500 rounded-lg p-2"
            ></textarea>
            <input type="hidden" name="id"/>
  
            
              <button
                type="button"
                disabled
                className="bg-teal-500 px-4 py-2 rounded-lg text-white"
              >Submit
            </button>
          </Form>
  
        </div>
      </div>
    );
  }