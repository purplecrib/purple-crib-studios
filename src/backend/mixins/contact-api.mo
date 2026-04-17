import Types "../types/contact";
import Common "../types/common";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

mixin (
  submissions : List.List<Types.ContactSubmission>,
  nextId : { var value : Common.SubmissionId },
) {
  public shared func submitContactForm(form : Types.SubmitContactForm) : async Types.SubmitResult {
    Runtime.trap("not implemented");
  };

  public query func listContactSubmissions() : async [Types.ContactSubmission] {
    Runtime.trap("not implemented");
  };
};
