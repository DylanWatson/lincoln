exports.menu = function ()
{
  return "We are here to give you motivation!\n\nSelect the type of motivation you are seeking:\n\n1. Homework\n2. Exercise\n3. Stress\n\nWhen you are ready, you can exit by typing \"exit\"";
}

exports.choice = function (choice)
{
  if(choice == 1)
  {
    return "Once you finish your homework you won't have to worry about it anymore!";
  }

  if(choice == 2)
  {
    return "You will feel so good about yourself after working out!";
  }

  if(choice == 3)
  {
    return "Just breathe slowly.";
  }

  if(choice === "exit")
  {
    return "exit"
  }
}
