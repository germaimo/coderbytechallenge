# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Requirements for Facility Management System
1. Implement ability for facilities to save custom ids for agents
As a facility user, I should be able to assign a custom id for each agent I work with, so that I can use this custom id when generating reports for them.

- Add a new field for custom id in the Agent model.
- Add an endpoint in the API for the facility user to update the custom id for an agent.
- Add a new field for custom id in the report generation form.
- Update the report generation logic to use the custom id if it exists, and fall back to the internal database id if it does not.
- Update the API documentation to include instructions for using the custom id.
Estimated time/effort: 8-12 hours.

2. Add ability to import/export custom agent ids in bulk
As a facility user, I should be able to import/export custom agent ids in bulk, so that I can update them in bulk or migrate them to another system.

- Add import/export functionality for the custom id field in the Agent model.
- Add validation to ensure that custom ids are unique within a facility.
- Update the API documentation to include instructions for using the import/export functionality.
Estimated time/effort: 8-12 hours.

3. Update agent detail page to display custom id
As a facility user, I should be able to see the custom id for an agent on their detail page, so that I can easily identify them.

- Update the agent detail page to display the custom id if it exists, and fall back to the internal database id if it does not.
- Update the API documentation to include instructions for retrieving the custom id via the API.
Estimated time/effort: 4-6 hours.

4. Update agent search to allow searching by custom id
As a facility user, I should be able to search for agents using their custom id, so that I can easily find the agent I am looking for.

- Update the agent search functionality to allow searching by custom id.
- Update the API documentation to include instructions for searching by custom id via the API.
Estimated time/effort: 4-6 hours.

5. Update report generation to allow filtering by custom id
As a facility user, I should be able to generate reports for agents using their custom id, so that I can group agents by my own custom criteria.

- Update the report generation logic to allow filtering by custom id.
- Update the report generation form to allow selecting an agent by their custom id.
- Update the API documentation to include instructions for filtering by custom id via the API.
Estimated time/effort: 6-8 hours.



