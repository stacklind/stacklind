
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using stacklind.Server.Models;
using stacklind.Server.Data;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly AppDbContext _db;

    public ProjectsController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<List<Project>>> GetProjects()    
    {
        return await _db.Projects.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Project>> CreateProject(Project project)
    {
        _db.Projects.Add(project);
        await _db.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetProjects),
            new { id = project.Id },
            project);
    }
}
