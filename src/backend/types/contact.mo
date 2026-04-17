import Common "common";

module {
  public type ServiceInterest = {
    #Photography;
    #BusinessSolutions;
    #Both;
  };

  public type ContactSubmission = {
    id : Common.SubmissionId;
    name : Text;
    email : Text;
    phone : Text;
    serviceInterest : ServiceInterest;
    message : Text;
    submittedAt : Common.Timestamp;
  };

  public type SubmitContactForm = {
    name : Text;
    email : Text;
    phone : Text;
    serviceInterest : Text;
    message : Text;
  };

  public type SubmitResult = {
    #ok : Common.SubmissionId;
    #err : Text;
  };
};
