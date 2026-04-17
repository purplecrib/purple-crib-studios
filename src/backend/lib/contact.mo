import Types "../types/contact";
import Common "../types/common";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

module {
  public func parseServiceInterest(raw : Text) : ?Types.ServiceInterest {
    Runtime.trap("not implemented");
  };

  public func createSubmission(
    id : Common.SubmissionId,
    form : Types.SubmitContactForm,
    now : Common.Timestamp,
  ) : Types.ContactSubmission {
    Runtime.trap("not implemented");
  };

  public func addSubmission(
    submissions : List.List<Types.ContactSubmission>,
    submission : Types.ContactSubmission,
  ) {
    Runtime.trap("not implemented");
  };

  public func listSubmissions(submissions : List.List<Types.ContactSubmission>) : [Types.ContactSubmission] {
    Runtime.trap("not implemented");
  };
};
