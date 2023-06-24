# AluLink API Documentation

## Organization Routes

### Register Organization

- URL: ` /organizations `
- Method: POST
- Description: Creates a new organization.
- Request Body:
    - name (string, required): Name of the organization.
    - location (string, required): Location of the organization.
    - established (date, required): Date of establishment of the organization.
    - website (string, required): Website URL of the organization.
    - phoneNumber (string, optional): Phone number of the organization.
    - email (string, optional): Email address of the organization.
    - logo (string, optional): Logo URL of the organization.
    - description (string, required): Description of the organization.
    - programType (string, required): Type of programs offered by the organization.
    - admin (object, required):
        - name (string, required): Name of the organization admin.
        - email (string, required): Email address of the organization admin.
        - password (string, required): Password of the organization admin.
        - phone (string, required): Phone number of the organization admin.
- Response: Newly created organization object.

### Get Organization Profile
- URL: ` /organizations/:id `
- Method: GET
- Description: Retrieves the profile of a specific organization.
- URL Parameters:
    - id (string): ID of the organization.
- Response: Organization object.

### Update Organization Profile

- URL: ` /organizations/update `
- Method: PUT
- Description: Updates the profile of an organization.
- Request Body:
    - id (string, required): ID of the organization.
    - data (object): Updated organization data. Only the allowed properties can be modified.
- Response: Updated organization object.

### Search Organization List
- URL : ` /organizations/search?query=searchValue`
- Method: Get
- Description : Gives the Organization List
- Response : Organization List With (_id , name & established)

## User Routes

### Register User

- URL: ` /user `
- Method: POST
- Description: Creates a new user.
- Request Body:
    - name (string, required): Name of the user.
    - email (string, required): Email address of the user.
    - password (string, required): Password of the user.
    - dateOfBirth (date, optional): Date of birth of the user.
    - headline (string, required): Headline of the user.
    - phoneNumber (string, optional): Phone number of the user.
    - colleges (object, required):
        - college (string, required): Name of the college.
        - startYear (number, required): Year of starting at the college.
        - graduationYear (number, required): Year of graduation from the college.
- Response: Newly created user object.

### Get User

- URL:  ` /user/:id `
- Method: GET
- Description: Retrieves the profile of a specific user.
- URL Parameters:
    - id (string): ID of the user.
- Response: User object.

### Update User

- URL: ` /user/update `
- Method: PUT
- Description: Updates the profile of a user.
- Request Body:
    - id (string, required): ID of the user.
    - data (object): Updated user data. Only the allowed properties can be modified.
- Response: Updated user object.

Please note that the allowed properties and validation rules mentioned in the documentation are based on the provided code snippets. You can customize them as per your specific requirements.

### Un-Verified User
- URL : ` /user/unverified`
- Method : POST
- Description : Get un-verified user
- Request Body:
    - id : organization id

### Verify The User
- URL : `/user/verify`
- Method : POST
- Description : To verify the user
- Request Body : 
    - id : User ID

## Post Routes

- URL : ` /post/create`
- Method : POST
- Description : Create a new Post
- Request Body :
    - user Id
    - organization id
    - description
    - image [optional]
