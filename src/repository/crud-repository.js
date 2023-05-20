class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something Went Wrong to create in CRUD Repository");
            throw error;
        }
    }

    async get(data) {
        try {
            const result = await this.model.findOne(data).select('-password -admin.password -isVerified');
            return result;
        } catch (error) {
            console.log("Something Went Wrong to get data in CRUD Repository");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data, { new: true }).select('-password -admin.password -isVerified');
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }

    }

    async destory(id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something Went Wrong to delete data in CRUD Repository");
            throw error;
        }
    }

}

export default CrudRepository;