using System.ComponentModel.DataAnnotations;

namespace InspecaoAPI.Models
{
    public class Status
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string OpcaoStatus { get; set; } = string.Empty;
    }
}
