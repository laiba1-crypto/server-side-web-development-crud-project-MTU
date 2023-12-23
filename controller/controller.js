const R00201303 = require("../schema/schema.js");






// ############################# Create Assignment ############################# 
exports.assignmentCreate = async (req,res) =>{
    const assignment = req.body;
    try{
        const  assign = await R00201303.create(assignment);
        res.status(200).json(assign)
    }catch(error){
        res.status(409).json({message : error.message});
        
    }
}
// ############################# Create Assignment ############################# 


 // ############################# Get All ############################# 
exports.getAllAssignment = async (req,res)=>{
// const {} = req.body;
try{
    const allAssignment = await R00201303.find({});
    res.status(200).json(allAssignment); 

}catch(error){
    console.log("error occur in get All assignment" + error);
    res.status(500).json({ error: "Internal Server Error" });

}
}
// ############################# Get All ############################# 


// ############################# Get By ID Start ############################# 
exports.getAssignmentByID = async (req, res) => {
    const { id } = req.query;  
    try {
      const assignment = await R00201303.findById(id);
      if (!assignment) {
        return res.status(404).json({ error: "Assignment not found" });
      }
      res.status(200).json(assignment);
    } catch (error) {
      console.log("Error occurred in getAssignmentByID: " + id);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
// ############################# Get By ID END ############################# 
  
// ############################# Update Assignment ############################# 
exports.updateAssignment = async (req, res) => {
    const { id } = req.query;  
    const assignment = req.body;
  
    try {
      const assign = await R00201303.findByIdAndUpdate(id, assignment, { new: true });
      if (!assign) {
        return res.status(404).json({ message: 'Assignment not found' });
      } else {
        return res.status(200).json({ message: 'Assignment updated successfully' });
      }
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  
// ############################# Delete Assignment ############################# 
  
exports.deleteAssignment = async (req, res) => {
    const { id } = req.query;  
    try {
        const assignment = await R00201303.findByIdAndDelete(id);
        if (!assignment) {
            return res.status(404).json({ error: "Assignment not found" });
        }
        res.status(200).json({ message: 'Assignment deleted successful' });
    } catch (error) {
        console.log("Error occurred in getAssignmentByID: " + error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
// ############################# Delete END ############################# 