const db = require('../Models');
const Project = db.project;

exports.AddProject = async (req, res) => {
  try {
    const project = new Project({
      projectTitle: req.body.projectTitle,
      projectStatus: req.body.projectStatus,
      client: req.body.client,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      description: req.body.description,
    });
    await project.save(function (error, project) {
      if (error)
        res
          .status(500)
          .send({ message: 'something went wrong please try again ' });

      if (project)
        res.status(201).send({ message: 'Project Details Added SuccessFully' });
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

exports.UpdateProject = async (req, res) => {
  Project.findByIdAndUpdate(
    req.params.id,
    {
      projectTitle: req.body.projectTitle,
      projectStatus: req.body.projectStatus,
      client: req.body.client,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      description: req.body.description,
    },
    function (err) {
      if (err) {
        res.send(err);
        return;
      }
      res.send({
        message: 'Project  has been Updated SuccessFully ..!!',
      });
    }
  );
};

exports.deleteProjectById = async (req, res) => {
  Project.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err)
      res.status(404).send({
        message: 'Failed ! Project Does not Exist with Given Id ',
      });
    if (docs)
      res.status(200).send({
        message: 'Project  Deleted SuccessFully',
      });
  });
};

exports.findProjectById = async (req, res) => {
  Project.findById(req.params.id, function (error, project) {
    if (error) {
      res.status(500).send({
        message: 'Failed ! Project not found With This ID',
      });
    }
    if (project) res.status(202).send(skills);
  });
};

exports.findAllProjectBySeekerId = async (req, res) => {
  try {
    await Project.find({ seeker: req.seekerId }, function (err, Project) {
      if (err) {
        res.send({ message: err });
      }
      if (project) {
        res.send(project);
      }
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
