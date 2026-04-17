import Types "types/contact";
import Common "types/common";
import ContactMixin "mixins/contact-api";
import List "mo:core/List";

actor {
  let submissions = List.empty<Types.ContactSubmission>();
  var nextIdValue : Common.SubmissionId = 0;
  let nextId = { var value = nextIdValue };

  include ContactMixin(submissions, nextId);
};
